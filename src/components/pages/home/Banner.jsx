import React from 'react'
import bannerImg from '../../../assets/bannerimg.jpg'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Button from '../../common/Button'
import Span from '../../ui/Span'

const Banner = () => {
  return (
    <>
      <div 
        className="relative bg-cover bg-center bg-no-repeat w-full min-h-[520px] lg:h-[663px] bg-gradient-to-br from-[#161722] via-[#1E202E] to-[#111218]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#161722]/90 via-[#161722]/70 to-[#161722]/40 lg:from-[#161722]/60 lg:via-transparent lg:to-transparent pointer-events-none"></div>
        <Container>
          <div className="relative z-10 pb-12 lg:pb-0">
            <div className='pt-16 sm:pt-24 lg:pt-32 pb-6 lg:pb-8'>
              <Subheading className='uppercase font-bold text-white pb-3 lg:pb-4 text-sm sm:text-base'>
                Welcome to our CHURCH
              </Subheading>
              <h1 className='uppercase text-white font-robotoCon font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight tracking-[-1%] max-w-[592px]'>Become a part of our community</h1>
            </div>
            <Button className='py-4 px-10 sm:py-5 sm:px-12 lg:py-6 lg:px-16 mb-10 lg:mb-16'>
              Learn More
            </Button>
            <div className="relative pl-8 max-w-[300px]">
                <Span className='font-robotoCon font-normal text-sm sm:text-base text-white relative after:absolute after:content-[""] after:w-[18px] after:h-[2px] after:bg-primary after:left-[-24px] after:top-[10px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Span>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Banner