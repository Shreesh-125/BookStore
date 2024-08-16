import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from '../../public/list.json'

function Courses() {
    console.log(list);
    

  return (
    <>
        <Navbar/>
        <div className='min-h-screen pt-3'>
            <Course/>
        </div>
        <Footer/>
    </>
  )
}

export default Courses