import { useState } from 'react'
import {  Flowbite } from 'flowbite-react';
import {Route,Routes,BrowserRouter} from "react-router-dom"

import './App.css'
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';
import FooterComponent from './components/FooterComponent';
import  ContextProvider  from './contextApi/ContextApi';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
    <>
    <div className=''> 
    <ContextProvider>
      <BrowserRouter>
        <Flowbite>
          <Header/>

          <Routes>            
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>

          </Routes>

          <FooterComponent/>
        </Flowbite>
      </BrowserRouter>
    </ContextProvider>
    </div>
    </>
  )
}

export default App
