import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flowbite>
      <DarkThemeToggle />
    </Flowbite>
    </>
  )
}

export default App
