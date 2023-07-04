import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Header from './components/Header';
import Students from './components/Students';
import RegisterPage from './pages/RegisterPage';
import UpdateStudent from './components/UpdateStudent';
import FooterComponent from './components/FooterComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flowbite className='w-full'>
      <Header/>
      <DarkThemeToggle />
      <Students/>
      <RegisterPage/>
      <UpdateStudent/>
      <FooterComponent/>
    </Flowbite>
    </>
  )
}

export default App
