import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'   

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className=''>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box  dark:bg-slate-900 dark:text-white ">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
               
                <h3 className="font-bold text-lg  dark:text-white">Login</h3>
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
                     {errors.password && <span className='text-red-500 text-sm '>This field is required</span>}

                </div>
                <div className='flex justify-around mt-4'>
                    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                    <span>Not Registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></span>
                </div>
                </form >
            </div>
        </dialog>
    </div>
  )
}

export default Login