# class Api::V1::AuthController < ApplicationController 
#     skip_before_action :authorized, only: [:create]

#     def create 
#         user = User.find_by_username!(params[:username])
#         if user && user.authenticate(parapms[:password])
#             token = issue_token(user)
#             render json: {user: UserSerializer.new(user), jwt: token}
#         else 
#             render json: {error: 'That user could not be found'}, status: 401
#         end
#     end

#     def show 
#         user = User.find(:id)
#         if logged_in?
#             render json: user 
#         else 
#             render json: {error: 'No user could be found'}, status: 401
#         end
#     end

    

# end