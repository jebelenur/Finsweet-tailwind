import React from 'react'

const Para = ({className='', children}) => {
  return (
    <p className={`font-robotoCon text-base text-[#161722] font-normal ${className}`}>
        {children}
    </p>
  )
}

export default Para