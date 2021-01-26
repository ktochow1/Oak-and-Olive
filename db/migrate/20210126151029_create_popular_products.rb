class CreatePopularProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :popular_products do |t|
      t.string :name
      t.string :type
    end
  end
end
