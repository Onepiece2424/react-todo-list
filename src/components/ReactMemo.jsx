const ReactMemo = (props) => {
    return (
      <>
        <h1>{props.title}</h1>
        <h2>{props.content}</h2>
        <div>{props.text}</div>
      </>
    )
};

export default ReactMemo;
