
import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../common/Container'
import Headings from '../../common/Headings'
import Subheading from '../../common/Subheading'

const blogs = [
  {
    id: 1,
    slug: 'building-stronger-communities',
    title: 'Building Stronger Communities Together',
    desc: 'Discover how small acts of kindness can create meaningful changes in our communities.',
    publishedDate: '2026-11-10'
  },
  {
    id: 2,
    slug: 'the-power-of-education',
    title: 'The Power of Education',
    desc: 'Explore how education opens doors to opportunities and creates a brighter future.',
    publishedDate: '2026-11-08'
  },
  {
    id: 3,
    slug: 'making-a-difference-through-giving',
    title: 'Making a Difference Through Giving',
    desc: 'Learn how volunteering brings people together and makes a lasting impact.',
    publishedDate: '2026-11-05'
  },
  {
    id: 4,
    slug: 'every-child-deserves-a-chance',
    title: 'Every Child Deserves a Chance',
    desc: 'Why creating equal opportunities for children matters more than ever.',
    publishedDate: '2026-11-02'
  },
  {
    id: 5,
    slug: 'small-steps-big-changes',
    title: 'Small Steps, Big Changes',
    desc: 'Sometimes the smallest actions can lead to the biggest transformations.',
    publishedDate: '2026-10-28'
  },
  {
    id: 6,
    slug: 'creating-opportunities-for-everyone',
    title: 'Creating Opportunities for Everyone',
    desc: 'A look at the importance of making learning accessible to all.',
    publishedDate: '2026-10-24'
  }
]

const Blogbody = () => {
  return (
    <section className='py-20'>
      <Container>
        <div className='text-center mb-12'>
          <Subheading className='uppercase mb-4'>
            Latest Updates
          </Subheading>

          <Headings>
            Explore Our Stories
          </Headings>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className='bg-[#FFF5EB] rounded-xl p-6'
            >
              <p className='text-sm text-gray-500 mb-4'>
                {new Date(blog.publishedDate).toLocaleDateString('en-GB')}
              </p>

              <h3 className='text-xl font-bold mb-3'>
                {blog.title}
              </h3>

              <p className='text-gray-600 leading-relaxed mb-5'>
                {blog.desc}
              </p>

              <Link
                to={`/blog/${blog.slug}`}
                className='font-semibold text-primary hover:underline'
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Blogbody
