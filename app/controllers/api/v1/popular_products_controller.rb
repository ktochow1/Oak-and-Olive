class Api::V1::PopularProductsController < ApplicationController 
    
    def index 
        pop = PopularProduct.all
        render json: pop
    end 

    def create 
        find_item = PopularProduct.find_by(name: params["_json"][0]["name"])
        # binding.pry
        if find_item === nil 
            list = params["_json"].each do |item|
                    @pop = PopularProduct.new
                    
                    @pop.name = item["name"] 
                    @pop.quantity = item["quantity"]
                    @pop.category_id = item["id"]
                    @pop.image_url = item["imageUrl"]
                    @pop.price = item["price"]
                    # @pop.category_id = item["category_id"]
                    @pop.save
                    # binding.pry
            end 
        else 
                find_item.quantity += params["_json"][0]["quantity"]
                find_item.save
        end
    end 

    def most_popular
         pop = PopularProduct.all.sort{|a, b| a.category_id <=> b.category_id}

        hats = pop.find_all{|i| i.category_id <= 6}
        sorted_hats = hats.sort_by{|item| item[:quantity]}
        pop_hat = sorted_hats[-1]

        bottoms = pop.find_all{|i| i.category_id >= 7 && i.category_id <= 12}
        sorted_bottoms = bottoms.sort_by{|item| item[:quantity]}
        pop_bottom = sorted_bottoms[-1]

        tops = pop.find_all{|i| i.category_id >= 13}
        sorted_tops = tops.sort_by{|item| item[:quantity]}
        pop_top = sorted_tops[-1]

        most_popular_items = [pop_hat, pop_bottom, pop_top]
        all_items = [hats, tops, bottoms]
        #  binding.pry
        # #  pop.sort{|a, b| a.category_id === b.category_id}
         pop_sorted = pop.sort{|a, b| b.quantity <=> a.quantity && a.category_id <=> b.category_id}
        # #  pop_sorted.sort{|a, b| a.category_id = b.category_id}
         binding.pry
         render json: most_popular_items

        
    end

end

