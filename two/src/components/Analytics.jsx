import React from 'react'
import computer from '../assets/computer.png'
const Analytics = () => {
  return (
    <div className='bg-white mt-10 flex justify-center p-5'>
    <div className='md:flex'>
<img className='w-[380px] mx-auto ' src={computer} alt="/" />
<div className='space-y-3 '>
<p className='text-green-500 md:text-xl'>DATA ANALYTICS DASHBOARD</p>
<p className='text-black font-bold text-lg md:text-2xl'>Manage Data Analytics Centre</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facere aspernatur error nam nulla sapiente, mollitia alias odit! Modi voluptatum eveniet placeat amet aspernatur cupiditate minus natus laudantium mollitia vero.</p>
<button className='text-green-500 py-3 px-5 rounded-lg font-semibold   bg-black hover:text-white '>Get started</button>
</div>

    </div>
  
    </div>
  )
}

export default Analytics
