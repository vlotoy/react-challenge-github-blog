import styled from 'styled-components'

export const Container = styled.header`
  height: 296px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors['base-profile']};

  > img:first-child {
    padding: 4.375rem 0 2.375rem;
  }

  > img:last-child {
    padding: 1.875rem 0;
  }

  > div {
    padding-top: 4rem;
  }
`
