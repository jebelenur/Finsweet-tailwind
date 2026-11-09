import React from 'react'
import Container from '../../common/Container'
import Subheading from '../../common/Subheading'
import Headings from '../../common/Headings'
import Para from '../../ui/Para'

const Colleagedisplay = () => {
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
                <Para className='max-w-[846px] mt-8 mx-auto mb-14'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Para>
            </div>
        </Container>
    </>
  )
}

export default Colleagedisplay