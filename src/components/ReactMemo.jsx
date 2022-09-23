const ReactMemo = (props) => {
    const textStyle = {
      color: props.color,
      fontSize: "16px"
    }

    return (
      <>
        <h1>{props.title}</h1>
        <h2>{props.content}</h2>
        <div style={textStyle}>{props.text}</div>
      </>
    )
};

export default ReactMemo;
