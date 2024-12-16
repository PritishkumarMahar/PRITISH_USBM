import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [task, setTask] = useState(""); // State for the input value
  const inputRef = useRef(null); // Reference for focusing the input field

  // Function to add a task
  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear the input field
    inputRef.current.focus(); // Automatically focus input
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List App</h1>
      <div className="task-input">
        <input
          ref={inputRef}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(t.id)}>{t.text}</span>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
