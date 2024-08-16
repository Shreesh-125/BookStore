import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from 'react-hook-form'   

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className='flex h-screen items-center justify-center  '>
        <div  className="w-[600px]">
            <div className="modal-box  dark:bg-slate-900 dark:text-white dark:border">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Signup</h3>
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
                {/* password */}
                <div className='mt-4 space-y-2'>
                    <span>Password</span><br/>
                    <input type="password" placeholder='Enter your Password' className='px-3 py-1 w-80 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                    {...register("password", { required: true })} /><br/>
                    {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}


                </div>
                <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign up</button>
                    <p className='text-base'>Have Account? <button to='/' className='underline text-blue-500 cursor-pointer'
                    onClick={()=>document.getElementById("my_modal_3").showModal()}>
                        login</button><Login/>  </p>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup