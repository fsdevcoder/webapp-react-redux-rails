class SessionsController < ApplicationController
  before_action :is_logged_in, only: [:new, :create]
  before_action :not_logged_in, only: [:destroy]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
    else
      flash.now[:errors] = 'Wrong username or password'
      @user = User.new(username: params[:user][:username])
      render :new
    end
  end

  def destroy
    user = current_user

    if user
      user.reset_session_token!
      session[:session_token] = nil
      redirect_to root_url
    end
  end
end