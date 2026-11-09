import React from 'react'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Headings from '../../common/Headings'
import Cards from '../../common/Cards'
import Images from '../../ui/Images'
import prayericon from '../../../assets/prayericon.png'

const Aboutus = () => {
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
          <div className='mt-10 mb-16 lg:mt-16 lg:mb-32 flex flex-col lg:flex-row items-center gap-6'>
            <Cards
              logo={<Images src={prayericon} alt="not found"/>}
              title="ABOUT US"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Cards
              logo={<Images src={prayericon} alt="not found"/>}
              title="ABOUT US"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Cards
              logo={<Images src={prayericon} alt="not found"/>}
              title="ABOUT US"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Aboutus