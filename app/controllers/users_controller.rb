class UsersController < ApplicationController
  before_action :is_logged_in, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      @user = User.new(username: params[:user][:username])
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end