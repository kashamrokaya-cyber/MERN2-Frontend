import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    

<nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
  <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap ">BookStore</span>
  </Link>
  
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
      <li>
        <Link to="/addBook" className="block py-2 px-3 text-black bg-blue-700 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page"><button className='border bg-blue-600 text-xl rounded-2xl p-3 cursor-pointer hover:text-white '>Add Books</button></Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

    
    </>
  )
}

export default Navbar