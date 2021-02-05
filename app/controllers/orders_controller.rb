# class OrdersController < ApplicationController 
#     before_action :authenticate_user!

#     def index 
#         products = Product.all
#         @products_purchase = products.where(stripe_plan_name: nill, paypal_plan_name: nill)
#         @products_subscription = products - @products_purchase
#     end

#     def submit 

#     end

# end