import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../common/Container'

const BlogDetails = () => {
  const { slug } = useParams()

  return (
    <section className='py-20'>
      <Container>
        <h1 className='text-4xl font-bold mb-6'>
          {slug}
        </h1>

        <p className='text-gray-600'>
          This is where the full blog content will go.
        </p>
      </Container>
    </section>
  )
}

export default BlogDetails