class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    redirect_to '/home'
  end

  def is_logged_in
    return if !current_user

    redirect_to '/home'
  end

  def not_logged_in
    return if current_user

    redirect_to root_url
  end
end
