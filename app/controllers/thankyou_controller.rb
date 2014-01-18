class ThankyouController < ApplicationController
  
  def index
    @votes = Vote.all
  end

end
