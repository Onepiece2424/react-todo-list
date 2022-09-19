import { useState, useEffect } from 'react';

const UseEffectCount = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffectが実行されました')
  }, [count])

  return (
    <>
      <h1>Learn useEffect</h1>
      <h2>Count: {count}/Count2: {count2}</h2>
      <button onClick={() => setCount(count + 1)}>Count+</button>
      <br></br>
      <button onClick={() => setCount2(count2 + 1)}>Count2+</button>
    </>
  )
}

export default UseEffectCount;
