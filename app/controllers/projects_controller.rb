class ProjectsController < ApplicationController
    def show
        render template: "projects/#{params[:page]}"
    end
  end