import React from 'react'

const Button = ({ children, className = "", ...props }) => {
  return (
    <button 
      className={`bg-primary text-[#1C1D28] font-robotoCon font-normal uppercase transition-all rounded-xl px-12 py-5 cursor-pointer ${className}`}
      {...props}>
      {children}
    </button>
  )
}

export default Button