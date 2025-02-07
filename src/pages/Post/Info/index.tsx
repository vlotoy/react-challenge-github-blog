import { Link, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PostContext } from '../../../context'
import { Body, InfoHeading, LinkContainer, Social } from './styles'

export function Info() {
  const { id } = useParams()
  const posts = useContextSelector(PostContext, (context) => context.posts)
  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return null
  }

  const formattedDateRelativeToNow = formatDistanceToNow(post.createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <>
      <InfoHeading>
        <div>
          <LinkContainer>
            <Link to={'/'}>
              <FontAwesomeIcon icon={faChevronLeft} size="sm" />
              <span>Voltar</span>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to={post.htmlUrl}>
              <span>Ver no GitHub</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </Link>
          </LinkContainer>
        </div>

        <h2>{post.title}</h2>

        <Social>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            vlotoy
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDateRelativeToNow}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </span>
        </Social>
      </InfoHeading>

      <Body>
        <Markdown>{post.body}</Markdown>
      </Body>
    </>
  )
}
