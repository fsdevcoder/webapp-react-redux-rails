class AddUserIdToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :user_id, :integer

    Todo.all.each do |todo|
      todo.user_id = 1
      todo.save!
    end

    change_column_null :todos, :user_id, false
  end
end
