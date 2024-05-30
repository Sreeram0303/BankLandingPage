import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={` ${styles} rounded-xl font-medium text-primary
    outline-none text-[18px]  font-poppins px-6 py-4 bg-blue-gradient`}>
      Get Started
    </button>
  )
}

export default Button