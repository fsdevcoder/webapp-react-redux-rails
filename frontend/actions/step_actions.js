import * as APIUtil from '../utils/step_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const fetchSteps = () => (dispatch) => {
  return APIUtil.fetchSteps()
    .then((steps) => dispatch(receiveSteps(steps)))
};

export const createStep = (step) => (dispatch) => {
  return APIUtil.createStep(step)
    .then(
      (step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const updateStep = (step) => (dispatch) => {
  return APIUtil.updateStep(step)
    .then(
      (step) => dispatch(receiveStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};

export const deleteStep = (step) => (dispatch) => {
  return APIUtil.deleteStep(step)
    .then(
      (step) => dispatch(removeStep(step)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
};
