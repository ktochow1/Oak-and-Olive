class Hat < ApplicationRecord
    mount_uploader :picture, PictureUploader
    has_one_attached :picture 
end
