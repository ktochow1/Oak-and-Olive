class User < ApplicationRecord
    validates_presence_of :email, :password 
    validates_uniqueness_of :email
    # has_secure_password validations: false 

    # def self.from_omniauth(auth)
    #     where(email: auth.info.email).first_or_initialize do |user|
    #       user.user_name = auth.info.name
    #       user.email = auth.info.email 
    #       user.password = SecureRandom.hex 
    #     end
    # end 

end
