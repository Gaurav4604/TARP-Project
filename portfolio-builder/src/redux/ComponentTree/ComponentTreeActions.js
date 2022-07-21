import types from "./types";

export const addComponent = (component) => {
  return (dispatch, getState) => {
    const { nodeId, componentId } = getState().componentState;

    const { componentName } = component;

    const addComponent = {};

    dispatch({
      type: types.ADD_COMPONENT,
      payload: {},
    });
  };
};
