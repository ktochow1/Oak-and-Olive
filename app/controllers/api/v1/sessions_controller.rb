class Api::V1::SessionsController < ApplicationController 

    # def omniauth 
    #     @user = User.from_omniauth(auth)
    #     @user.save 
    #     session[:user_id] = @user.id 
    #     redirect_to home_path 
    # end

    # private 
    
    # def auth 
    #     request.env['omniauth.auth']
    # end

    def create 
        user = User.find_by(email: params["user"]["email"]).try(:authenticate, params["user"]["password"])
        if user 
            session[:user_id] = user.id 
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else 
            render json: { status: 401 }
        end
    end

    def login
        binding.pry
        if user = User.find_by_username!(params[:username]) 
            user.authenticate(password)
            session[:current_user_id] = user.id 
        end
        
        # @user = User.find_by(params[:username])
        # session[:user_id] = @user.id 
        # render json: {
        #     status: accepted,
        #     logged_in: true,
        #     user: @user
        # }
        
    end

    def end 
        binding.pry
        @user = User.find_by(id)
        session.delete(:current_user_id)
        @user = nil
        # binding.pry
    end 
end 