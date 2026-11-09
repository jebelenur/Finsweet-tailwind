import React from 'react'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Headings from '../../common/Headings'
import Images from '../../ui/Images'
import womenpray from '../../../assets/womenpray.png'
import Span from '../../ui/Span'
import Para from '../../ui/Para'

const benefitData = [
  {
    src: womenpray,
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  },
  {
    src: womenpray,
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  },
  {
    src: womenpray,
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  },
  {
    src: womenpray,
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  }
]

const Benefits = () => {
  return (
    <>
        <div className='bg-[#F5F2F0]'>
            <Container>
                <div className='flex flex-col justify-center items-center text-center gap-5 pt-32 pb-16'>
                    <Subheading className='uppercase'>
                        watch and listen
                    </Subheading>
                    <Headings className='max-w-[432px] tracking-[-1%] text-center'>
                        THE BENEFITS OF JOINING OUR CHRUCH
                    </Headings>
                </div>
                <div className='pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
                    {benefitData.map((item, index) => (
                        <div key={index} className='relative group w-full max-w-[302px] h-[384px] overflow-hidden rounded-lg cursor-pointer'>
                            <Images src={item.src} alt="not found" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300'>
                                <Span className='uppercase font-bold text-white'>
                                    {item.title} 
                                </Span>
                                <Para className='text-gray-200 text-sm mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100'>
                                    {item.description}
                                </Para>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    </>
  )
}

export default Benefits