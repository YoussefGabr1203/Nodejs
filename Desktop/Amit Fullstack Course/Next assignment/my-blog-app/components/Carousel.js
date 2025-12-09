'use client'

import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: "Welcome to NextBlog",
    description: "Discover amazing articles and insights",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Latest Tech Trends",
    description: "Stay updated with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Programming Insights",
    description: "Deep dive into coding best practices",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
]

export default function BlogCarousel() {
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <div
            style={{
              height: '400px',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}