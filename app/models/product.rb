class Product < ApplicationRecord::Base
    # mount_uploader :picture, PictureUploader
    # has_one_attached :picture 

    monetize :price_cents 
    has_many :orders
end
