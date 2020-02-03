class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :todo_id, null: false

      t.timestamps
    end

    add_index :taggings, [:todo_id, :tag_id], unique: true
  end
end
