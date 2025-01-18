import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import React from 'react'


export const Hero = () => {
  return (
    <div  className='flex flex-col items-center mx-56 gap-9'>
      <h1  className='font-extrabold text-[60px] text-center mt-60' >
        <span className='text-[#f56551]'>
          Discover New Places,
        </span>
         Discover Yourself
        <p className='text-xl text-gray-500'>Peronsal triplannewr</p>
        <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
        </Link>
       


      </h1>
    </div>
  )
}
