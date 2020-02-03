import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep, createStep } from '../../actions/step_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id,
  state
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  createStep: step => dispatch(createStep(step)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
