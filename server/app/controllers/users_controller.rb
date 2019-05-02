class UsersController < ApplicationRecord
    before_action :define_selected_user
    
    def create
        user = User.create(user_params)
        render json: user
    end
    
    def index
        render json: User.all
    end
    
    def show
        render json: selected_user
    end
    
    def update
        selected_user.update(user_params)
        render json: selected_user
    end
    
    def destroy
        selected_user.destroy
        render json: selected_user
    end
    
    def user_params
        params.permit(:name, :password)
    end
    
    def define_selected_user
        if params[:id]
            @selected_user = User.find(params[:id])
        else
            @selected_user = User.new
        end
    end
    
    def selected_user
        @selected_user
    end

end