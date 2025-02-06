import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const ProfileContainer = styled.section`
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  filter: drop-shadow(
    0 0 0.15rem ${({ theme }) => theme.colors['base-profile']}
  );

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mixins.fonts.titleL}
  color: ${({ theme }) => theme.colors['base-title']};

  > div {
    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors['blue']};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${mixins.fonts.link}
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['blue']};

    svg {
      padding-bottom: 1px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`
export const Bio = styled.p`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const Social = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
