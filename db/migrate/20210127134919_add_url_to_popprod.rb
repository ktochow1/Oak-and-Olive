class AddUrlToPopprod < ActiveRecord::Migration[6.0]
  def change
    add_column :popular_products, :image_url, :string
  end
end
