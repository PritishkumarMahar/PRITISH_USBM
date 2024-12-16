import { createContext, useReducer } from "react";

// Create Context
export const CounterContext = createContext();

// Reducer function to manage counter actions
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

// Context Provider
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
