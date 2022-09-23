import React, {useState, useEffect} from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect run');
 }, []);

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count + 1 )}>+1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1 )}>+1</button>
    </div>
  )
}

export default UseEffectExample;
