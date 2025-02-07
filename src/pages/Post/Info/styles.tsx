import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const InfoHeading = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      ${mixins.fonts.link}
      text-decoration: none;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['blue']};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > h2 {
    margin-top: 1.25rem;
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const Body = styled.p`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    margin-top: 1rem;
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-title']};
  }

  h3 {
    margin-top: 1rem;
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['blue']};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p:has(img) {
    display: contents;
    /* justify-content: center; */
  }
`

export const LinkContainer = styled.div``
export const Social = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors['base-span']};

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    gap: 1rem;
    flex-direction: column;
  }
`
