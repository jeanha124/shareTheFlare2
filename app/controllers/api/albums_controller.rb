class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    if @album.save
      photo_ids = params[:album][:photo_ids]

      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end
  
  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = current_user.albums.find(params[:id])
    @album.update(album_params)
    if @album
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])
    @album.destroy
    render :show
    
  end


  private
  def album_params
    params.require(:album).permit(:owner_id, :title, photo_ids: [])
  end

end
