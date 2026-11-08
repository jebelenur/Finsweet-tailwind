import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Anchor from '../ui/Anchor'
import Images from '../ui/Images'
import { menuData } from '../../dummydata/menudata'

const Navbar = () => {
  return (
    <>
        <nav className='bg-navbg py-3'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-32'>
                        <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-50 after:-right-16 after:-bottom-7 ">
                            <Images src={logo} alt="not found"/>
                        </Anchor>
                        <ul className='flex items-center gap-12'>
                            {
                                menuData.map((item, index)=>(
                                    <li key={index}>
                                        <Anchor href={item.url} className="font-normal font-robotoCon text-based uppercase text-white">
                                            {item.label}
                                        </Anchor>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div>
                        <button className='bg-primary px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-xl font-robotoCon'>Contact Us</button>
                    </div>
                </div>
            </Container>
        </nav>
    </>
  )
}

export default Navbar