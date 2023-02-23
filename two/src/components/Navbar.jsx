import React,{userState, useState} from 'react';
import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
const Navbar = () => {
  const [nav,setNav]=useState(false);
  const handle=()=>{
    setNav(!nav)
  }
  
  return (
    <div className='flex justify-between p-5 '>
      <h1 className='text-2xl font-bold font-mono text-green-500'>REACT</h1>
      <ul className='text-white  space-x-7 hidden  md:flex'>
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handle} className='md:hidden'>
        {nav ? <AiOutlineClose className='text-white' size={20}/>:<AiOutlineMenu className='text-white' size={20}/>}
      </div>
      <div className= {nav ? 'text-white pt-10 space-y-3 pl-6 fixed left-0 top-0 border-r w-[50%] h-full ease-in duration-500 border-gray-800 bg-black':"fixed -left-[90%]"}>
      <h1 className='text-2xl font-bold font-mono text-green-500'>REACT</h1>
      <ul className=' uppercase'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar
