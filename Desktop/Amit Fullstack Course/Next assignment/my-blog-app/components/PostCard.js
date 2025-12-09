import Link from 'next/link'
import { Card, Button, Badge } from 'react-bootstrap'

export default function PostCard({ post }) {
  const excerpt = post.body.length > 60 
    ? `${post.body.substring(0, 60)}...` 
    : post.body

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <div className="mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} bg="secondary" className="tag-badge">
              {tag}
            </Badge>
          ))}
        </div>
        <Button as={Link} href={`/posts/${post.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}