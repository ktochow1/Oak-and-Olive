class ApplicationController < ActionController::API
    # before_action :set_csrf_cookie
    # before_action :authorized 

    def jwt_key 
        ENV['SESSION_SECRET']
    end 

    def issue_token(user)
        JWT.encode({user_id: user.id}, jwt_key,'HS256')
    end

    def decoded_token 
        begin 
            JWT.decode(token, jwt_key, true, {:algorithm => 'HS256'})
        rescue JWT::DecodeError 
            [{error: "invalid token"}]
        end
    end

    def authorized 
        render json: {message: 'please log in'}, status: :unauthorized unless logged_in?
    end

    def token 
        request.headers['Authorization']
    end

    def user_id 
        decoded_token.first['user_id']
    end

    
    # def frontend_index_html
    #     render file: 'public/index.html'
    # end

    def current_user
        
        user ||= User.find_by(session[:current_user_id])
        binding.pry
    end
    
    def logged_in?
        # current_user != nil 
        !!current_user
        binding.pry
    end 


    private 

    def set_csrf_cookie 
        cookies["CSRF-TOKEN"] = form_authenticity_token 
    end
end
