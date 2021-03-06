class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :Stripe_plan_name
      t.string :paypal_plan_name
    end
    add_money :products, :price, currency: { present: true }
  end
end
