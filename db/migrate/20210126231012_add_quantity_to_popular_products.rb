class AddQuantityToPopularProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :popular_products, :quantity, :integer
  end
end
