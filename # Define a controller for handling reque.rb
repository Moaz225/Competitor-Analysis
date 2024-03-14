# Define a controller for handling requests
class HomeController < ApplicationController
  def index
    render plain: 'Hello World!'
  end
end

# Define routes for the application
Rails.application.routes.draw do
  root 'home#index'
end
