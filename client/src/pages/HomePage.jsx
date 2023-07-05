import React from 'react'
import Students from '../components/Students'
import UpdateStudent from '../components/UpdateStudent'

const HomePage = () => {
  return (
    <div className='container mx-auto app mt-16'>
        <Students/>
        <UpdateStudent/>
    </div>
  )
}

export default HomePage