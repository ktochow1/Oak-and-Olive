class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]
  # before_action :require_login
  # def self.from_omniauth(auth)
  #   where(email: auth.info.email).first_or_initialize do |user|
  #     user.user_name = auth.info.name
  #     user.email = auth.info.email 
  #     user.password = SecureRandom.hex 
  #   end
  #  end 

  def profile 
    @user = User.find(params[:id])
    render json: {user: current_user}
  end

  def index
    @users = User.all
    # binding.pry
    render json: {users: @users}
  end

  def create
    # binding.pry
    user = User.new(user_params)
    user.email = params[:email][0]
    user.password = params[:password][0]
    user.username = params[:username][0]
    if user.valid?
    binding.pry
    user.save
      session[:current_user_id] = user.id
      # user.status = 'new'
      redirect_to :controller => "sessions", :action => "login"
      # render json: session[:current_user_id]
    else 
      render error: {error: 'Unable to create user'}
    end
  end

  # def require_login
  #   if !session[:current_user_id] = user.id 
  #     render error: {error: "unauthenticated user"}
  #   end 
  # end

  def login
    
    @user = User.find_by_username!(params[:username])
      #  if user.authenticate(password)
        session[:current_user_id] = @user.id 
        binding.pry
    # @user = User.find_by(params[:username])
    # session[:user_id] = @user.id 
    render json: {
        status: "accepted",
        logged_in: true,
        user: @user
    } 
  end

      private 

  def user_params 
     params.require(:user).permit(:username, :email, :password)
      # binding.pry
  end 

end







# class UsersController < SecuredController

#     skip_before_action :authorize_request, only: [:index, :show]

#     def index 
#         users = User.all 
#         render json: users
#     end
    
#     def show 
#         user = User.find(params[:id])
#         render json: user 
#     rescue ActiveRecord::RecordNotFound 
#         head :not_found 
#     end 

#     def create 
#         user = User.create!(user_params) 
#         render json: user, status: :created 
#     end 

#     def destroy 
#         user = User.find(params[:id])
#         user.delete 
#         head :no_content 
#     end 


# end
