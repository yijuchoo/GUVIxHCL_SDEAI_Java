// UI purpose only
// Call dispatch; No business logic

import { useReducer } from "react";
import { initialState, counterReducer } from "../reducer/counterReducer";
import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

function Counter() {
  // hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      &nbsp;
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
}

export default Counter;
