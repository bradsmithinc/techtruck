class ApplicationController < ActionController::Base
 # protect_from_forgery with: :exception

  before_filter :current_user

  helper_method :logged_in?
  helper_method :current_user
  helper_method :current_service
 

  def home
    uri = URI.parse("https://api.instagram.com/v1/tags/rahrahsstories/media/recent?client_id=32c03ead436b463993c4cc1b50fa1197")
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(uri.request_uri)

    response = http.request(request)
    hash = JSON.parse(response.body)
    @image1 = hash['data'][0]['images']['standard_resolution']['url']
    @image2 = hash['data'][1]['images']['standard_resolution']['url']
    @image3 = hash['data'][2]['images']['standard_resolution']['url']
    @image4 = hash['data'][3]['images']['standard_resolution']['url']
    @image5 = hash['data'][4]['images']['standard_resolution']['url']
    @image6 = hash['data'][5]['images']['standard_resolution']['url']
    puts @image1
    puts "dd"
    puts @image2

    @tweets = Twitter.user_timeline("rahrahstruck", :count =>3)
    render 'home', :layout => false
  end

  def twilio_create
    @vote = Vote.new(:vote => params['Body'])
    @vote.save
    render :text => 'OK'
  end

  protected
  def current_user
    @current_user ||= User.find(session[:user_id]) if session.has_key?(:user_id)
  rescue ActiveRecord::RecordNotFound
    session[:user_id] = nil
  end

  def current_service
    if session.has_key?(:service_id)
      @current_service ||= Service.where(user_id: session[:user_id], id: session[:service_id]).first
    end
  rescue ActiveRecord::RecordNotFound
    session[:service_id] = nil
  end

  def current_user?
    !!current_user
  end

  def logged_in?
    current_user?
  end

  def authenticate_user!
    if session.has_key?(:user_id)
      current_user
    else
      redirect_to redirect_path
    end
  end

  def logout!
    @current_user = nil
    reset_session
  end

  def redirect_path
    :root
  end
end
