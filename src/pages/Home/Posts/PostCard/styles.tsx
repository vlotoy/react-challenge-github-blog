import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  padding: 2rem;
  max-width: 26rem;
  height: 260px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-post']};

  &:hover {
    padding: calc(2rem - 2px);
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
    cursor: pointer;
  }

  > header {
    /* width: 100%; */
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    > p {
      ${mixins.fonts.titleM}
      color: ${({ theme }) => theme.colors['base-title']};

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
      color: ${({ theme }) => theme.colors['base-span']};
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
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
