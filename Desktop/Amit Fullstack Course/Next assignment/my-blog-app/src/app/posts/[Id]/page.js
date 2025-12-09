import Link from 'next/link'
import Navbar from './components/Navbar'
import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap'

async function getPost(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function SinglePostPage({ params }) {
  const post = await getPost(params.id)
  
  if (!post) {
    return (
      <>
        <Navbar />
        <Container className="my-5">
          <h2>404 - Post Not Found</h2>
          <Button as={Link} href="/posts">Back to Posts</Button>
        </Container>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Button as={Link} href="/posts" variant="secondary" className="mb-4">
          ← Back to Posts
        </Button>
        
        <Card>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            
            <div className="mb-3">
              <strong>Tags:</strong>
              <div className="mt-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} bg="info" className="me-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-4">
              <strong>Reactions:</strong>
              <Row className="mt-2">
                {Object.entries(post.reactions).map(([type, count]) => (
                  <Col xs={6} md={4} key={type} className="mb-2">
                    <div>
                      {type}: <Badge bg="success">{count}</Badge>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}