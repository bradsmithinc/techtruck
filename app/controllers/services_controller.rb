class ServicesController < ApplicationController
  def new
  end

  def create
  end

  def failure
  end

  private
  def omnihash
    request.env['omniauth.auth']
  end
end
