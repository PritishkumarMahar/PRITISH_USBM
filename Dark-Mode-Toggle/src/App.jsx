import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app">
      <header>
        <h1>Dark Mode Toggle Example</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      <main>
        <p>This is a sample content demonstrating theme switching.</p>
      </main>
    </div>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
