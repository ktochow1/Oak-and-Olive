class AddForeignKeyToPopularp < ActiveRecord::Migration[6.0]
  def change
    add_column :popular_products, :category_id, :integer
  end
end
