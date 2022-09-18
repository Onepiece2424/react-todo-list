import React from "react";
import './App.css';
import { useSelector } from "react-redux";

function App() {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <h2>Todoリスト</h2>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
