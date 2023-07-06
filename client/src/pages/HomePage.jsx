import React, { useContext, useEffect } from 'react'
import Students from '../components/Students'
import AddStudent from '../components/AddStudent'
import { contextApi } from '../contextApi/contextApi'

const HomePage = () => {
  const {getStudents,getUserToken} =useContext(contextApi);

  useEffect(()=>{
    getStudents();
    getUserToken();

  },[])
  return (
    <div className='container mx-auto app mt-16'>
        <Students/>
        <AddStudent/>
    </div>
  )
}

export default HomePage