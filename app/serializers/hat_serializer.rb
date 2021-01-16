class HatSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers #enables us to generate URL's outside of controller - URL will generate picture
  
  attributes :id, :picture

  def picture 
    if object.picture.attached? 
      {
        url: rails_blob_url(object.picture) #only need the URL from the picture
      }
    end
  end
end
