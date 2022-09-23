const ColoredMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: "red",
    fontSize: "20px"
  }
  return (
    <p style={contentStyle}>元気です！</p>
  )
}

export default  ColoredMessage;
