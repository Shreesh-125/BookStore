import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='pt-28 justify-center items-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're Delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae est reiciendis eos voluptates omnis sequi, excepturi quaerat architecto culpa laborum vero distinctio dolorem optio, nisi delectus id illum dolorum, cumque quasi corrupti? Eos, dolore? omnis sequi, excepturi quaerat architecto culpa laborum vero distinctio dolorem optio, nisi delectus id illum dolor</p>
            <Link to='/'>
            <button className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((data)=>(
                    <Cards  item={data} key={data.id}/>
                ))
            }
        </div>
    </div>
   </>
  )
}

export default Course