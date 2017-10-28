class AddForeignKeyToGroupMembers < ActiveRecord::Migration[5.0]
  def change
    remove_column :group_members, :user_id, :integer
    remove_column :group_members, :group_id, :integer

    add_reference :group_members, :user, foreign_key: true
    add_reference :group_members, :group, foreign_key: true
  end
end
