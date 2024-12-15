import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import "./App.css";

const App = () => {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div className="app">
      <h1>Counter App with Context API</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
