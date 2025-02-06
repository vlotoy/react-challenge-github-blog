import { Posts } from './Posts'
import { Profile } from './Profile'
import { SearchForm } from './SearchForm'
import { HomeContainer, PostsHeading } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <section>
        <PostsHeading>
          <h4>Publicações</h4>
          <span>6 publicações</span>
        </PostsHeading>

        <SearchForm />

        <Posts />
      </section>
    </HomeContainer>
  )
}
