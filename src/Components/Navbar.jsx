import React, { useState } from 'react'
import { navLinks } from "../constants"
import { close, logo, menu } from "../assets"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // w-full navbar
    <nav className='py-6 flex justify-between items-center w-full'>

      <img src={logo} className="w-[124px] h-[32px]"   alt="" />
      <ul className=' sm:flex hidden list-none justify-end items-center flex-1
       text-white'>
        {navLinks.map((link, index) => (
          <li key={link.id}
            className={`font-poppins font-normal cursor-pointer 
              text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
            <a href={`${link.id}`}>
              {link.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 items-center justify-end'>
        <img src={toggle ? close : menu}
          width={28}
          height={28}
          alt="menu"
          className=' object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
      absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar   `}>
          <ul className=' flex flex-col list-none justify-end items-center flex-1'>
            {navLinks.map((link, index) => (
              <li key={link.id}
                className={`font-poppins font-medium cursor-pointer text-white
            text-[16px] hover:text-secondary  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} `}>
                <a href={`${link.id}`}>
                  {link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>


    // <nav className='w-full flex py-6 justify-between items-center navbar'>
    //   <img src={logo} alt="logo" className='w-[124px] h-[124px]' />

    // </nav>
  )
}

export default Navbar