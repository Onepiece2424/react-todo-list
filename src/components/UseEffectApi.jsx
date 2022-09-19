import React, {useEffect, useState} from "react";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('Onepiece2424')
  const ids = ['Onepiece2424', 'kingdom0927']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  },[id])

  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
