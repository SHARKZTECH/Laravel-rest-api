import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Header from './components/Header';
import Students from './components/Students';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flowbite className='w-100'>
      <Header/>
      <DarkThemeToggle />
      <Students/>
    </Flowbite>
    </>
  )
}

export default App
