import React, { useRef, useEffect } from 'react'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Headings from '../../common/Headings'
import Cards from '../../common/Cards'
import Images from '../../ui/Images'
import prayericon from '../../../assets/prayericon.png'
import { cardData } from '../../../dummydata/aboutusdata'

const Aboutus = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      }
    }

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const loopedCards = [...cardData, ...cardData]

  return (
    <>
      <Container>
        <div>
          <div className='mt-16 lg:mt-32 flex flex-col text-center justify-center'>
            <Subheading className='uppercase pb-4'>
              Sub-Headline
            </Subheading>
            <Headings>
              a church that's relevant
            </Headings>
          </div>
          <div
            ref={scrollRef}
            className='mt-10 mb-16 lg:mt-16 lg:mb-32 flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          >
            {loopedCards.map((item, index) => (
              <Cards
                key={index}
                className='shrink-0'
                logo={<Images src={prayericon} alt="not found"/>}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Aboutus