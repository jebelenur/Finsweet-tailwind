import React from 'react'

const Subheading = ({className='', children}) => {
  return (
    <h6 className={`font-robotoCon font-normal text-base text-[#161722] ${className}`}>
        {children}
    </h6>
  )
}

export default Subheading