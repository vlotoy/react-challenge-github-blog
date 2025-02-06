import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  height: 260px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-post']};

  > header {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    > p {
      ${mixins.fonts.titleM}

      @media (max-width: 768px) {
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        text-overflow: ellipsis;
      }
    }

    > span {
      width: 40%;
      ${mixins.fonts.textS}
      text-align: right;
    }
  }

  > p {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    text-overflow: ellipsis;
  }
`
