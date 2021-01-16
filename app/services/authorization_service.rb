# extracting authorization logic to service folder = separating concerns
# of VERIFYING AUTHENTICITY OF JWT vs AUTHORIZING HTTP REQ 

#AuthorizationService grabs access token in Authorization HTTP header
# and passes it to JsonWebToken for verification

# separation of responsibility can limit future changes to JWT verification process
# to JsonWebToken class


# class AuthorizationService

#     def initialize(headers = {})
#       @headers = headers
#     end
  
#     def authenticate_request!
#       verify_token
#     end
  
#     private
  
#     def http_token
#       if @headers['Authorization'].present?
#         @headers['Authorization'].split(' ').last
#       end
#     end
  
#     def verify_token
#       JsonWebToken.verify(http_token)
#     end
  
#   end