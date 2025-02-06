import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { Avatar, Bio, ProfileContainer, ProfileHeading, Social } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/vlotoy.png" alt="" />
      <div>
        <ProfileHeading>
          <p>Victor Loyola</p>
          <div>
            <Link to="https://github.com/vlotoy">
              <span>GitHub</span> <FontAwesomeIcon icon={faUpRightFromSquare} />
            </Link>
          </div>
        </ProfileHeading>

        <Bio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Bio>

        <Social>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            vlotoy
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Empresa
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </span>
        </Social>
      </div>
    </ProfileContainer>
  )
}
