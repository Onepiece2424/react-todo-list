import { useState, useEffect } from 'react';

const UseEffectCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffectが実行されました')
  }, [])

  return (
    <>
      <h1>Learn useEffect</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default UseEffectCount;
