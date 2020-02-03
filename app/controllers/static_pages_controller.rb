class StaticPagesController < ApplicationController
  before_action :not_logged_in

  def route
    render :root
  end
end