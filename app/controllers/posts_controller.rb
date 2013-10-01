class PostsController < ApplicationController
  respond_to :json

  def new
    @post = Post.new
    render json: @post
  end

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

  def edit
    @post = Post.find(params[:id])
    render :edit
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(params[:post])
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    render json: @post
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

end
