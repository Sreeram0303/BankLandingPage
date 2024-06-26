import React from 'react'
import styles from "../style.js"
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`w-full md:flex-row mb-8 flex-col ${styles.flexStart}`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo}
            alt="hoobank"
            className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap
        md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 
            min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]
               text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px]
                   text-dimWhite hover:text-secondary cursor-pointer 
                   ${index !== link.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 
      border-t-[1px] border-t-[#3f3e45]'>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px]
               text-white">Copyright Ⓒ 2024 HooBank. All Rights Reserved.</p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((item,index)=>(
              <img 
              key={item.id}
              src={item.icon} 
              alt={item.id} 
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? "mr-6":"mr-0" }`}/>
          ))}
        </div>
      </div>


    </section>
  )
}

export default Footer