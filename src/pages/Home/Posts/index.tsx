import { useContextSelector } from 'use-context-selector'
import { PostCard } from './PostCard'
import { PostsContainer } from './styles'
import { PostContext } from '../../../context'
import { Link } from 'react-router-dom'

export function Posts() {
  const posts = useContextSelector(PostContext, (context) => context.posts)

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <PostCard post={post} />
        </Link>
      ))}
    </PostsContainer>
  )
}
