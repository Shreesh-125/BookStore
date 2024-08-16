import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Contact() {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    
  return (
   
    < >
    <Navbar/>
    <div className='min-h-screen min-w-full md:px-20 px-4 '>
    <div className='max-w-screen-2xl container mx-auto pt-24 flex items-center justify-center w-full '>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col rounded-xl py-10 md:px-20 space-y-6'>
                <h3 className='text-3xl font-bold'>Contact Us</h3>
                {/* Name */}
                <div className='mt-4 space-y-2'>
                        <span>Name</span><br/>
                        <input type="name" placeholder='Enter your Full Name' className='px-3 py-1 w-80 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                        {...register("name", { required: true })} /><br/>
                        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}

                    </div>
                
                {/* Email */}
                <div className='mt-4 space-y-2'>
                        <span>Email</span><br/>
                        <input type="email" placeholder='Enter your Email' className='px-3 py-1 w-80 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                        {...register("email", { required: true })} /><br/>
                        {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}

                    </div>
                    {/* Message */}
                    <div className='mt-4 space-y-2'>
                        <span>Message</span><br/>
                        <textarea type="text" placeholder='Enter the Message' className='px-3 py-1 w-80 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                        {...register("message", { required: true })} /><br/>
                        {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}


                    </div>
                    <div>
                    <button className='bg-pink-500 rounded-md px-3 py-1 text-white'>Submit</button>
                    </div>
            </div>
        </form>
    </div>
    </div>
    <Footer/>
    </>
   
    
  )
}

export default Contact