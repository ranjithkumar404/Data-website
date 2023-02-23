import React from 'react';
import Typed from 'react-typed';
const hero = () => {
  return (
    <div className='flex justify-center mt-20'>
      <div className='flex-col text-white space-y-3 text-center md:space-y-7'>
        <p className='text-green-500 '>GROWING WITH DATA ANALYTICS</p>
        <p className='text-4xl md:text-7xl sm:text-5xl font-bold'>Grow with data.</p>
        <div className='flex justify-center space-x-2'>
            <p className='text-xl font-semibold md:text-4xl sm:text-2xl'>Fast,flexible financing for  </p>
            <Typed className='text-xl font-semibold md:text-4xl sm:text-2xl' strings={['BTB','BTC','SASS']} loop typeSpeed={120} backSpeed={150}/>
        </div>
        <p className='md:text-2xl font-bold text-xl text-gray-700'>Monitor your data analytics to increase revenue for BTB,BTC and SASS platforms.</p>
        <button className='bg-green-500 py-3 px-5 rounded-lg font-semibold  hover:text-white  text-black'>Get started</button>
      </div>
      
    </div>
  )
}

export default hero
