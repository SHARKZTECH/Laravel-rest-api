import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Header from './components/Header';
import Students from './components/Students';
import RegisterPage from './pages/RegisterPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flowbite className='w-100'>
      <Header/>
      <DarkThemeToggle />
      <Students/>
      <RegisterPage/>
    </Flowbite>
    </>
  )
}

export default App
