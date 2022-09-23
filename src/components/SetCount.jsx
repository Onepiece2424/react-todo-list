const React = require('react')

const SetCount = React.memo(props => {
  let i = 0;
  while (i < 10000000) i++;
  console.log("render SetCount");
  return <p>Child: {props.count}</p>
})

export default SetCount;
