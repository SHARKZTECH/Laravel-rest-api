import React from 'react'
import Students from '../components/Students'
import AddStudent from '../components/AddStudent'

const HomePage = () => {
  return (
    <div className='container mx-auto app mt-16'>
        <Students/>
        <AddStudent/>
    </div>
  )
}

export default HomePage