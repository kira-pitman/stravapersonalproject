import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Trail Running 2: Electric Boogaloo</h1>
      </div>
      <div className="count">{count}</div>
      <div className="button">
        <button onClick={() => setCount(count + 1)}>Click meeeeeee</button>
      </div>
    </>
  )
}

export default App
