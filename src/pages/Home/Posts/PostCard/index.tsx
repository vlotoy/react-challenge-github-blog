import { Post } from '../../../../context/PostContext'
import { Container } from './styles'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Container>
      <header>
        <p>{post.title}</p>
        <span>{post.createdAt}</span>
      </header>

      <p>{post.body}</p>
    </Container>
  )
}
