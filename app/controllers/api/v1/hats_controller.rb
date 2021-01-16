class HatsController < ApplicationController 

    # def hat_params 
    #     params.require(:hat).permit(:name, :picture)
    # end

    def index 
        @hats = Hat.all 
        render json: @hats
    end
end