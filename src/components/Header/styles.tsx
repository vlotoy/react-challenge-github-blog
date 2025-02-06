import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: rgb(13, 40, 66);
  background: linear-gradient(
    0deg,
    rgba(13, 40, 66, 1) 0%,
    rgba(12, 29, 48, 1) 100%
  );

  > img {
    max-width: 33%;

    &:first-child {
      padding: 4.375rem 0 2.375rem;
    }

    &:nth-child(2) {
      padding-top: 4rem;
    }

    &:last-child {
      display: flex;
      align-self: center;
    }
  }

  @media (max-width: 768px) {
    height: 200px;

    > img {
      &:first-child {
        padding: 0;
        align-self: center;
      }

      &:nth-child(2) {
        padding-top: 3rem;
        scale: 90%;
      }
    }
  }
`
