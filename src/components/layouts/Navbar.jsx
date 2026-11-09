import React, { useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Anchor from '../ui/Anchor'
import Images from '../ui/Images'
import { menuData } from '../../dummydata/menudata'
import { FaBars, FaXmark } from "react-icons/fa6";
import Button from '../common/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <nav className='bg-navbg py-3 relative'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-32'>
                        <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-20 after:-right-16 after:-bottom-6 ">
                            <Images src={logo} alt="not found"/>
                        </Anchor>
                        <ul className='hidden lg:flex items-center gap-12'>
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
                    <Button className="hidden lg:block text-base">
                        Contact Us
                    </Button>
                    <FaBars 
                        onClick={() => setIsOpen(true)} 
                        className='text-white text-2xl cursor-pointer lg:hidden'
                    />
                </div>
            </Container>

            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)} 
                    className='fixed inset-0 bg-black/50 z-40 lg:hidden'
                />
            )}

            <div className={`fixed top-0 right-0 h-full w-64 bg-navbg z-50 p-6 shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex justify-end mb-8'>
                    <FaXmark 
                        onClick={() => setIsOpen(false)} 
                        className='text-white text-2xl cursor-pointer' 
                    />
                </div>

                <ul className='flex flex-col gap-6'>
                    {menuData.map((item, index) => (
                        <li key={index}>
                            <Anchor 
                                href={item.url} 
                                onClick={() => setIsOpen(false)}
                                className="font-normal font-robotoCon text-base uppercase text-white block"
                            >
                                {item.label}
                            </Anchor>
                        </li>
                    ))}
                </ul>

                <button className='mt-8 w-full bg-primary py-4 uppercase font-normal text-base text-[#1C1D28] rounded-xl font-robotoCon'>
                    Contact Us
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar