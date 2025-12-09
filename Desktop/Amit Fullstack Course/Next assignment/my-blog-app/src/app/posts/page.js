import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import PostCard from '@/components/PostCard'
import Loader from '@/components/Loader'
import { Container, Row, Col } from 'react-bootstrap'

async function getPosts() {
  try {
    const res = await fetch('https://dummyjson.com/posts', {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    const data = await res.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

function PostsContent({ posts }) {
  if (posts.length === 0) {
    return (
      <Container className="my-5">
        <div className="text-center">
          <h3>No posts found</h3>
          <p>Unable to load posts at this time.</p>
        </div>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">All Posts</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Col key={post.id}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <Suspense fallback={
        <>
          <Navbar />
          <Loader />
        </>
      }>
        <PostsContent posts={posts} />
      </Suspense>
    </>
  )
}