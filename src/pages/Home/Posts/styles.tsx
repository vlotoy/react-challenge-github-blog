import styled from 'styled-components'

export const PostsContainer = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
