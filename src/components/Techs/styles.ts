import styled, { css } from "styled-components"

export const Wrapper = styled.section`
  padding: 3rem 0;
`

export const Title = styled.h3`
  text-align: center;
  font-size: 4rem;
  color: white;
  margin-top: 5rem;

  @media screen and (max-width: 500px) {
    font-size: 3rem;
  }
`

export const TechsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 4rem 0 0 0;

    a {
      background-color: transparent;
      color: ${theme.colors.white[50]};
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 600;
      transition: 0.3s ease;
      cursor: pointer;

      svg {
        font-size: 4rem;
        margin-right: 1rem;
      }
      &:hover {
        color: ${theme.colors.primary[700]};
      }
    }

    @media screen and (max-width: 500px) {
      gap: 1.6rem;

      a {
        font-size: 1.2rem;

        svg {
          width: 1.6rem;
          height: 1.6rem;
          margin-right: 0.6rem;
        }
      }
    }
  `}
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    height: 2px;
    margin-bottom: 2rem;
    background-color: ${theme.colors.textSecondary};
  `}
`
