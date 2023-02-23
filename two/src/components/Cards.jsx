import React from 'react'
import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='bg-white p-10 md:p-10 sm:p-20 '>
      <div className='space-y-5  grid grid-cols-1 place-items-center md:flex md:justify-center md:space-y-3 md:space-x-7'>
      <div className=' hover:scale-105 w-[300px] duration-200 p-3 md:p-14 space-y-3 grid place-items-center shadow-xl rounded-md md:w-72 text-center'>
          <img className='w-20' src={Single} alt="" />
          <p className='text-2xl font-bold '>Single User</p>
          <p className='text-4xl font-bold '>$149</p>
          <p className='font-medium'>500GB Storage</p>
          <p className='font-medium'>1 User Allowed</p>
          <p className='font-medium'>Spend Up to 2GB</p>
          <button className='bg-green-500 text-black px-4 py-2 rounded-md'>Start Trail</button>
        </div>
        <div className='bg-slate-400 hover:scale-105 w-[300px] duration-200 p-3 md:p-14 space-y-3 grid place-items-center shadow-xl rounded-md md:w-72 text-center'>
          <img className='w-20 ' src={Double} alt="" />
          <p className='text-2xl font-bold '>Partnership</p>
          <p className='text-4xl font-bold '>$199</p>
          <p className='font-medium'>1TB Storage</p>
          <p className='font-medium'>3 Users Allowed</p>
          <p className='font-medium'>Spend Up to 10GB</p>
          <button className='text-green-500 bg-black px-4 py-2 rounded-md'>Start Trail</button>
        </div>
        <div className=' hover:scale-105 w-[300px] duration-200 p-3 md:p-14 space-y-3 grid place-items-center shadow-xl rounded-md md:w-72 text-center'>
          <img className='w-20' src={Triple} alt="" />
          <p className='text-2xl font-bold '>Group Account</p>
          <p className='text-4xl font-bold '>$149</p>
          <p className='font-medium'>5TB Storage</p>
          <p className='font-medium'>10 User Allowed</p>
          <p className='font-medium'>Spend Up to 20GB</p>
          <button className='bg-green-500 text-black px-4 py-2 rounded-md'>Start Trail</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
