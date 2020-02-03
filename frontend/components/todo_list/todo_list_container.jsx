import { connect } from 'react-redux';
import TodoList from './todo_list';

// Actions
import { receiveTodos, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';
import { allTodos } from '../../reducers/selectors';
import { fetchSteps } from '../../actions/step_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: () => dispatch(receiveTodos()),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  clearErrors: () => dispatch(clearErrors()),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchSteps: () => dispatch(fetchSteps()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
