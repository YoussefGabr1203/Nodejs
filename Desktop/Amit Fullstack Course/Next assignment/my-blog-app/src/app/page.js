import Navbar from '@/components/Navbar'
import BlogCarousel from '@/components/Carousel'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Navbar />
      <BlogCarousel />
      
      <Container className="my-5">
        <h2 className="text-center mb-4">About NextBlog</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center p-4">
              <Card.Body>
                <Card.Title>Welcome to Our Blog Platform</Card.Title>
                <Card.Text>
                  This is a fully functional blog application built with Next.js 14, 
                  Bootstrap, and the DummyJSON API. Explore our posts section to 
                  read interesting articles on various topics including technology, 
                  programming, and more.
                </Card.Text>
                <Card.Text className="text-muted">
                  Features: Dynamic routing, server-side rendering, responsive design, 
                  and real API integration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}