import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Aboutus from '../../components/pages/home/Aboutus'
import Benefits from '../../components/pages/home/Benefits'
import Colleagedisplay from '../../components/pages/home/Colleagedisplay'

const Homeindex = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Aboutus/>
        <Colleagedisplay/>
        <Benefits/>

        <Footer/>
    </>
  )
}

export default Homeindex