class Api::V1::PopularProductsController < ApplicationController 

    def index 
        pop = PopularProduct.all
        render json: pop
    end 

    def create 
        binding.pry
        params["_json"].each do |item|
            @pop = PopularProduct.new
            @pop.name = item["name"] 
            @pop.quantity = item["quantity"]
            @pop.category_id = item["id"]
            @pop.save
        end
    end 

    def most_popular(array)
         
        
    end

end