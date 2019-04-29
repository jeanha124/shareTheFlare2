class CommentsController < ApplicationController
  # before_action :require_login!

  # def index
  #   @comments = Comment.all
  # end

  # def create
  #   @comment = Comment.new(comment_params)
  #   if @comment.save
  #     @photo = Photo.find(@comment.photo_id)
  #     @comments = @photo.comments
  #     fail
  #     render :show
  #   else
  #     render :create
  #   end
  # end

  # def destroy
  #   @comment = Comment.find(params[:id])
  #   if @comment.destroy
  #     render :show
  #   else
  #     render :show
  #   end
  # end

  # def comment_params
  #   params.require(:comment).permit(:body, :commenter_id, :photo_id)
  # end

end
