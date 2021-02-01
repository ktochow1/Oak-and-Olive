class AddPriceToPp < ActiveRecord::Migration[6.0]
  def change
    add_column :popular_products, :price, :integer
  end
end
