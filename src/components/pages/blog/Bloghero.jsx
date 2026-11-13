import React from 'react'
import Container from '../../common/Container'
import Headings from '../../common/Headings'
import Subheading from '../../common/Subheading'
import Para from '../../ui/Para'

const Bloghero = () => {
  return (
    <section className='py-20 bg-[#FFF5EB]'>
      <Container>
        <div className='flex flex-col items-center text-center'>
          <Subheading className='uppercase mb-4'>
            Our Blog
          </Subheading>

          <Headings>
            Stories That Inspire
          </Headings>

          <Para className='max-w-[700px] mt-6'>
            Explore our latest stories, insights and updates.
            Discover ideas, experiences and perspectives that
            inspire positive change in our community.
          </Para>

          <div className='mt-10 w-full h-[350px] rounded-2xl overflow-hidden'>
            <img
              src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200'
              alt='Community gathering'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Bloghero
