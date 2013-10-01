class PostsController < ApplicationController
  respond_to :json

  def create
    @post = Post.new(params[:post])
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def index
    @posts = Post.all
    render json: @posts
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    render json: @post
  end

end
