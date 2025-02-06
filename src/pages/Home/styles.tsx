import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: -5.5rem auto 0;
  padding-bottom: 14.625rem;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  @media (max-width: 1000px) {
    margin: -4.5rem auto 0;
    padding: 2rem;
  }
`

export const PostsHeading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > span {
    ${mixins.fonts.textS}
    color: ${({ theme }) => theme.colors['base-span']}
  }
`
