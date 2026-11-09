import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Aboutus from '../../components/pages/home/Aboutus'
import Benefits from '../../components/pages/home/Benefits'
import Collagedisplay from '../../components/pages/home/Collagedisplay'

const Homeindex = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Aboutus/>
        <Collagedisplay/>
        <Benefits/>

        <Footer/>
    </>
  )
}

export default Homeindex