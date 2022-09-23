const React = require('react')

const Child = React.memo(props => {
  console.log("render Child");
  return <p>Child: {props.count}</p>;
});

export default Child;
