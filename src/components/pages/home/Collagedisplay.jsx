import React from 'react'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Headings from '../../common/Headings'
import Para from '../../ui/Para'
import Button from '../../common/Button'
import Images from '../../ui/Images'
import manprayer from '../../../assets/collage.jpg'
import Span from '../../ui/Span'
import { MdArrowRightAlt } from "react-icons/md";

const Collagedisplay = () => {
  return (
    <>
      <Container>
        <div className='flex flex-col text-center justify-center'>
          <Subheading className='uppercase pb-4'>
            Sub-Headline
          </Subheading>
          <Headings>
            love and compassion
          </Headings>
          <Para className='max-w-[846px] mt-8 mx-auto mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Para>
        </div>
        <div className='flex justify-center mb-10'>
          <Button>
            Read More
          </Button>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8'>
          <div className='w-full max-w-[280px] h-[350px] lg:-translate-y-6 rounded-3xl overflow-hidden shadow-lg'>
            <Images src={manprayer} alt="Prayer 1" className='w-full h-full object-cover' />
          </div>
          <div className='w-full max-w-[320px] h-[400px] lg:translate-y-8 rounded-3xl overflow-hidden shadow-lg z-10'>
            <Images src={manprayer} alt="Prayer 2" className='w-full h-full object-cover' />
          </div>
          <div className='w-full max-w-[293px] h-[384px] lg:-translate-y-4 rounded-3xl overflow-hidden shadow-lg'>
            <Images src={manprayer} alt="Prayer 3" className='w-full h-full object-cover' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 text-center mb-32'>
            <Subheading className='uppercase mt-30'>
                our mission & vision
            </Subheading>
            <Headings className='text-[32px]'>
                celebrate with us
            </Headings>
            <Para className='max-w-[512px] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Para>
            <Span className='capitalize cursor-pointer flex flex-row text-center'>
                read more <MdArrowRightAlt className='text-[28px]'/>
            </Span>
        </div>
      </Container>
    </>
  )
}

export default Collagedisplay