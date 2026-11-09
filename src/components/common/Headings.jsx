import React from 'react'

const Headings = ({className='', children}) => {
  return (
    <h3 className={`font-robotoCon font-bold text-[#161722] text-5xl uppercase ${className}`}>
        {children}
    </h3>
  )
}

export default Headings