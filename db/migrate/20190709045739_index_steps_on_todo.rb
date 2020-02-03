class IndexStepsOnTodo < ActiveRecord::Migration[5.2]
  def change
    add_index :steps, :todo
  end
end
