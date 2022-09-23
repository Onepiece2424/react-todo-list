import React, { useState } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import UseEffectExample from "./components/UseEffectExample";
import UseEffectApi from "./components/UseEffectApi";
import UseEffectCount from "./components/UseEffectCount";
import ReactMemo from "./components/ReactMemo";


function App() {

  const lists = useSelector((state) => state.lists);

  const dispatch = useDispatch();

  const doneList = (name) => {
    dispatch({ type: "DONE_LIST", payload: name });
  };

  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  const [name, setName] = useState("");

  const [complete, setComplete] = useState(false);

  const inputText = (e) => {
    setName(e.target.value);
  };

  const addList = () => {
    if (!name) return;

    setComplete(false);

    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        complete,
      },
    });
    setName("");
  };

  const greeting = 'Welcome to the world of React.js!';

  return (
    <div className="App">
      <h1>ReduxでTodoリスト作成</h1>
      <input type="text" value={name} onChange={inputText} />
      <button onClick={addList}>追加</button>
      <h2>未完了のTodoリスト</h2>
      <ul>
        {lists
        .filter((list) => list.complete === false)
        .map((list, index) => (
          <div key={index}>
            {list.name}
            <button onClick={() => doneList(list.name)}>完了</button>
            <button onClick={() => deleteList(list.name)}>削除</button>
            </div>
        ))}
      </ul>
      <h2>完了したTodoリスト</h2>
      <ul>
        {lists
        .filter((list) => list.complete === true)
        .map((list, index) => (
          <div key={index}>{list.name}</div>
        ))}
      </ul>
      <div>UseEffectの使用</div>
      <UseEffectExample />
      <UseEffectApi />
      <UseEffectCount />
      <br></br>
      <br></br>
      <div>
        <ReactMemo
          title={`新日本一わかりやすいReact講座`}
          content={`propsについて`}
          text={greeting}
          color="blue"
        />
      </div>
    </div>
  );
}

export default App;
