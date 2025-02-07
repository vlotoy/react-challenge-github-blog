import { useContextSelector } from 'use-context-selector'
import { Posts } from './Posts'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostsHeading } from './styles'
import { PostContext } from '../../context'

export function Home() {
  const posts = useContextSelector(PostContext, (context) => context.posts)

  return (
    <HomeContainer>
      <Profile />

      <section>
        <PostsHeading>
          <h4>Publicações</h4>
          <span>
            {posts.length === 1
              ? `${posts.length} publicação`
              : `${posts.length} publicações`}
          </span>
        </PostsHeading>

        <SearchForm />

        <Posts />
      </section>
    </HomeContainer>
  )
}
