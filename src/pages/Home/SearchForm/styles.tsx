import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 0.75rem;

  > input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    background: ${({ theme }) => theme.colors['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
