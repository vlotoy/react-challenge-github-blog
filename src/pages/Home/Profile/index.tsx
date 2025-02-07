import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Avatar, Bio, ProfileContainer, ProfileHeading, Social } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useFetchOwner } from '../../../hooks/useFetchOwner'

export function Profile() {
  const owner = useFetchOwner()

  return (
    <ProfileContainer>
      <Avatar src="https://github.com/vlotoy.png" alt="" />
      <div>
        <ProfileHeading>
          <p>{owner?.name}</p>
          <div>
            <Link to={owner?.htmlUrl ?? 'https://github.com.vlotoy'}>
              <span>GitHub</span> <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
          </div>
        </ProfileHeading>

        {owner?.bio && <Bio>{owner.bio}</Bio>}

        <Social>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            vlotoy
          </span>
          {owner?.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Empresa
            </span>
          )}
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {owner?.followers} seguidores
          </span>
        </Social>
      </div>
    </ProfileContainer>
  )
}
