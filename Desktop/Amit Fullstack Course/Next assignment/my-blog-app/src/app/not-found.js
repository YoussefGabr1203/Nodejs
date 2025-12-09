import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { Container, Button } from 'react-bootstrap'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Container className="text-center my-5 py-5">
        <h1 className="display-1 fw-bold">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="lead mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button as={Link} href="/" variant="primary" size="lg">
          Go Back Home
        </Button>
      </Container>
    </>
  )
}