class CreateTagPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_photos do |t|
      t.integer :photo_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    add_index :tag_photos, :photo_id
    add_index :tag_photos, :tag_id
  end
end
