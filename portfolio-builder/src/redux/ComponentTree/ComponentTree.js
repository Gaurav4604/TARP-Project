import types from "./types";

const initialState = {
  components: [],
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPONENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default stateReducer;
