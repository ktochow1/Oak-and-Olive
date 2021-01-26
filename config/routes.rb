Rails.application.routes.draw do
  # devise_for :users
  # get '/', to: 'orders#index'
  # post '/orders/submit', to: 'orders#submit'
  # resources :users
  namespace :api do
    namespace :v1 do
      # get 'tests', to: 'tests#index'
      get '/popular_products', to: 'popular_products#index'
      post '/popular_products_new', to: 'popular_products#create'
    end
  end

  # namespace :api do 
  #   namespace :v1 do 
  #     get '/users' => 'users#index' 
  #     post '/users/new' => 'users#create'
  #     post '/users', to: 'users#login'
      
  #   end 
  # end 

  # post '/login', 

  # resources :sessions
  # get '/current_user' to: 'application#current_user'

 
  # delete '/logout', to: 'sessions#end'
  # post '/login' => 'sessions#login'

  # get '/auth/:provider/callback' => 'sessions#omniauth'

  # get '*path', to: 'application#frontend_index_html', constraints: lambda { |request| !request.xhr? && request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
