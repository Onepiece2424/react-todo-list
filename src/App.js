import React from "react";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
    </div>
  );
}

export default App;
