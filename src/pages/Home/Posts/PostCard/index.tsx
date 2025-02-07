import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import { Post } from '../../../../context/PostContext'
import { Container } from './styles'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const formattedDateRelativeToNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <Container>
      <header>
        <p>{post.title}</p>
        <span>{formattedDateRelativeToNow}</span>
      </header>

      <p>
        <Markdown>{post.body}</Markdown>
      </p>
    </Container>
  )
}
