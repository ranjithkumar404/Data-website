import React from 'react'
import {
FaDribbbleSquare,
FaFacebookSquare,
FaGithubSquare,
FaInstagram,
FaTwitterSquare,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='bg-black p-5'>
      <div className='text-gray-300 space-y-8 md:flex '>
        <div className='space-y-8 md:p-3'>
        <h1 className='text-2xl font-bold font-mono text-green-500'>REACT</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolore alias similique suscipit minus corrupti sit, atque doloribus iusto autem.</p>
      <div className='flex space-x-4'>
      <FaDribbbleSquare size={30}/>
       <FaFacebookSquare size={30}/>
       <FaGithubSquare size={30}/>
       <FaInstagram size={30}/>
       <FaTwitterSquare size={30}/>
      </div>
        </div>
      <div className='flex space-x-10 md:p-5'>
        <div >
        
    <ul className='space-y-5'>
        <li>Solutions</li>
        <li>Analytics</li>
        <li>Marketing</li>
        <li>Commerce</li>
        <li>Insights</li>

    </ul>
        </div>
        <div >
       
    <ul className='space-y-5'>
    <p>Supports</p>
        <li>Pricing</li>
        <li>Documentation</li>
        <li>Guides</li>
        <li>API Status</li>

    </ul>
        </div>
        <div>
       
    <ul className='space-y-5'>
    <p>Company</p>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Careers</li>
    </ul>
        </div>
        <div>
      
    <ul className='space-y-5'>
    <p>Legal</p>
        <li>Claim</li>
        <li>Policy</li>
        <li>Terms</li>

    </ul>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Footer
