import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
        <div>ERROR 404</div>
        <NavLink to="/">back to home</NavLink>
    </>

  )
}

export default Errorpage