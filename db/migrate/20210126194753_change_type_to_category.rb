class ChangeTypeToCategory < ActiveRecord::Migration[6.0]
  def change
    remove_column :popular_products, :type
  end
end
