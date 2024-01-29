import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { TodoList } from "./components/TodoList";
import { TodoPage } from "./components/TodoPage";

function App() {
  return (
    <div className="container">
      <TodoPage />
    </div>
  );
}

export default App;
