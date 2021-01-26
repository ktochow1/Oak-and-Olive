class RemoveCategoryFromPopularProducts < ActiveRecord::Migration[6.0]
  def change
    remove_column :popular_products, :category
  end
end
