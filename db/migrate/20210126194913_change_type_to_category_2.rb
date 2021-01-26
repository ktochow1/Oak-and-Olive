class ChangeTypeToCategory2 < ActiveRecord::Migration[6.0]
  def change
    add_column :popular_products, :category, :string
  end
end
