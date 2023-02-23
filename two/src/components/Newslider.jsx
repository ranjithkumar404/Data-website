import React from 'react'

const Newslider = () => {
  return (
    <div className='flex justify-center p-2 pt-5  md:p-10 '>
      <div className='text-white space-y-4  lg:flex lg:space-x-64 lg:item-center'>
        <div className='space-y-5'>
        <p className='text-xl font-bold'>Want tips & tricks to optimize your flow?</p>
        <p className='text-lg font-semibold'>Sign up to our newsletter and stay up to date.</p>
        </div>
        
        
       <div className='space-y-3'>
       <input className='w-full focus:outline-none rounded-md h-10 text-sm p-3 text-black' type="email" placeholder='Enter your email ' />
        <button className='bg-green-500 text-black py-2 px-6 rounded-md hover:text-white'>Notify me</button>
        <p>We care about the protection of your data.Read our</p>
        <p className='underline text-green-500 hover:cursor-pointer'>Privacy Policy</p>
       </div>
      
       
      </div>
    </div>
  )
}

export default Newslider
