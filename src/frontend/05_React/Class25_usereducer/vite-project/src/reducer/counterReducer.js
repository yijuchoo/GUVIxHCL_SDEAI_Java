// contains the reducer function and updates the state
// handle all the actions

// initial state
export const initialState = {
  count: 0,
};

// reducer function
export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state, // get the previous state
        count: state.count + 1, // and increase the count value
      };

    case "DECREMENT":
      return {
        ...state, // get the previous state
        count: state.count - 1, // and decrease the count value
      };

    case "RESET":
      return {
        ...state, // get the previous state
        count: 0, // and reset the count value
      };
    default:
      return state;
  }
}
