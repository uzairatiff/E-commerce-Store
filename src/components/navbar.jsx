import React, { useState } from 'react'

const Navbar = ({searchQuery , setSearchQuery}) => {
    
  return (
    <div>
      <nav className='bg-orange-500 h-[80px] w-full flex flex-row'>
        <h1 className='text-3xl font-medium text-white p-4 pl-8'>E-commerce Store</h1>
        <input onChange={(e)=>setSearchQuery(e.target.value.toLowerCase())}
         className='h-[55px] text-xl font-medium ml-[40px] placeholder:text-xl placeholder:p-6 placeholder:text-black placeholder:font-medium placeholder:font-serif mt-3 w-[700px]'
         placeholder='search products by title..' 
         type="text"
         value={searchQuery} />

        <button className='h-[55px] w-[150px] bg-black rounded-lg text-white ml-[140px] mt-3 text-2xl'>Home</button>
      </nav>
    </div>
  )
}

export default Navbar
