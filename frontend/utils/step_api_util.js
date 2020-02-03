export const fetchSteps = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/steps'
  });
};

export const createStep = (step) => {
  return $.ajax({
    method: 'POST',
    url: 'api/steps',
    data: step
  });
};

export const updateStep = (step) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`,
    data: { step }
  });
};

export const deleteStep = (step) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/steps/${step.id}`
  });
};
