import { connect } from 'react-redux';
import StepListItem from './step_list_item';
// Actions
import { receiveStep, deleteStep, updateStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
  receiveStep: step => dispatch(receiveStep(step)),
  deleteStep: step => dispatch(deleteStep(step)),
  updateStep: step => dispatch(updateStep(step)),
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(StepListItem);
