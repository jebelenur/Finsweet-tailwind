import React from 'react'

const Anchor = ({href, className, children}) => {
  return (
    <a href={href} className={className}>
        {children}
    </a>
  )
}

export default Anchor