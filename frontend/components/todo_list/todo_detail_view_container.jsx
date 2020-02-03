import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
// Actions
import { deleteTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(
  null, // todo props is already passed in
  mapDispatchToProps
)(TodoDetailView);
