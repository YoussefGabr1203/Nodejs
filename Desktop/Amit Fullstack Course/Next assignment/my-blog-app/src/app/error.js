'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { Container, Button } from 'react-bootstrap'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Navbar />
      <Container className="text-center my-5 py-5">
        <h1 className="display-1 fw-bold">⚠️</h1>
        <h2 className="mb-4">Something went wrong!</h2>
        <p className="lead mb-4">
          An unexpected error occurred. Please try again.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button as="a" href="/" variant="outline-secondary">
            Go Home
          </Button>
        </div>
      </Container>
    </>
  )
}