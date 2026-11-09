import React from 'react'
import Container from '../common/Container'
import Anchor from '../ui/Anchor'
import Images from '../ui/Images'
import footerlogo from '../../assets/footer.png'
import Span from '../ui/Span'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Input from '../ui/Input'
import Button from '../common/Button'

const Footer = () => {
  return (
    <>
        <footer className='bg-footerbg py-16 px-4'>
            <Container>
                <div className='flex flex-col lg:flex-row justify-between gap-12 lg:gap-0'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <Anchor href="/" className=''>
                                <Images src={footerlogo} alt="not found" />
                            </Anchor>
                            <Span className='text-white'>
                                © Copyright Finsweet 2022
                            </Span>
                        </div>
                        <div className='text-white flex flex-col gap-4'>
                            <Span>
                                (480) 555-0103
                            </Span>
                            <Span>
                                4517 Washington Ave. 
                            </Span>
                            <Span>
                                finsweet@example.com
                            </Span>
                        </div>
                    </div>
                    <div className='flex gap-18 xl:mr-[115px] xl:ml-[200px]'>
                        <div className='flex flex-col gap-5'>
                            <Span className='text-white font-normal text-base flex flex-col capitalize font-robotoCon'>
                                Quicklinks
                            </Span>
                            <div className='text-white/78 font-normal text-xs flex flex-col gap-6 uppercase font-robotoCon'>
                                <Anchor href="#">
                                    About us
                                </Anchor>
                                <Anchor href="#">
                                    sermons
                                </Anchor>
                                <Anchor href="#">
                                    Events
                                </Anchor>
                                <Anchor href="#">
                                    Blog
                                </Anchor>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-5'>
                                <Span className='text-white font-normal text-base flex flex-col gap-6 capitalize font-robotoCon'>
                                    connect
                                </Span>
                                <div className='flex gap-5 text-primary'>
                                    <FaFacebook/>
                                    <FaTwitter/>
                                    <FaLinkedin />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='max-w-[377px] text-white uppercase font-robotoCon text-2xl sm:text-[32px] font-bold mb-8'>Subscribe to get Latest Updates and News</h3>
                        <div className="relative flex items-center w-full max-w-[512px] h-16 rounded-xl border border-white/15 bg-transparent">
                            <Input className="w-full bg-transparent px-4 sm:px-6 border-none text-white/80 font-robotoCon text-base font-normal focus:outline-none" placeholder="Youremail.com"/>
                            <Button className="h-full px-6 sm:px-12 lg:px-16 text-base font-medium flex items-center justify-center whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    </>
  )
}

export default Footer