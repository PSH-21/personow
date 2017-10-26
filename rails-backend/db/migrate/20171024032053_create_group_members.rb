class CreateGroupMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_members do |t|
      t.integer :user_id
      t.integer :group_id
      t.boolean :creator
      t.boolean :admin
      t.boolean :notifications

      t.timestamps
    end
  end
end
