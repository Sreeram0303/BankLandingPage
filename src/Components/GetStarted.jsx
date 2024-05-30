import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
const GetStarted = () => {
  return (
    <div className={` rounded-full w-[140px] h-[140px] ${styles.flexCenter}
    bg-blue-gradient p-[2px] cursor-pointer`
    }>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] 
      h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='mr-2 font-poppins font-medium  
          text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} className=' w-[23px] h-[23px] object-contain' alt="" />
        </div>
        <p className=' font-poppins font-medium  
          text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted