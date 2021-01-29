class Api::V1::PopularProductsController < ApplicationController 
    
    def index 
        pop = PopularProduct.all
        render json: pop
    end 

    def create 
      list = params["_json"].each do |item|
            
            # pop = PopularProduct.find_by(name: item["name"])
            # binding.pry

           
            
            # pop.quantity += item["quantity"]
            # binding.pry

            @pop = PopularProduct.new
            @pop.name = item["name"] 
            @pop.quantity = item["quantity"]
            @pop.category_id = item["id"]
            @pop.image_url = item["imageUrl"]
            # @pop.category_id = item["category_id"]
            @pop.save
            binding.pry
            # pop.save
            
        end
        
        
        

    end 

    def most_popular
         pop = PopularProduct.all.sort{|a, b| a.category_id <=> b.category_id}
        # #  pop.sort{|a, b| a.category_id === b.category_id}
         pop_sorted = pop.sort{|a, b| b.quantity <=> a.quantity && a.category_id <=> b.category_id}
        # #  pop_sorted.sort{|a, b| a.category_id = b.category_id}
        # #  binding.pry
        #  render json: pop_sorted

        
    end

end