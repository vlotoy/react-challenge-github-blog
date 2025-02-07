import { useContextSelector } from 'use-context-selector'
import { PostCard } from './PostCard'
import { PostsContainer } from './styles'
import { PostContext } from '../../../context'

export function Posts() {
  const posts = useContextSelector(PostContext, (context) => context.posts)

  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostsContainer>
  )
}
