import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <header>TS ECom</header>
      <main>
        {count}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Increment
        </button>
      </main>
      <footer>All rights reserved.</footer>
    </>
  )
}

export default App
