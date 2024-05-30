import React from 'react'
import styles from '../style'
import { stats } from '../constants'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>(
        <div key = {stat.id} className={`flex flex-1 justify-start items-center m-3`}>
          <h4 className='font-poppins text-white font-semibold 
          xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>{stat.value}</h4>
          <p className='font-poppins text-gradient font-semibold 
          xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 '>{stat.title}</p>
        </div>
      ))}

    </section>
  ) 
}

export default Stats