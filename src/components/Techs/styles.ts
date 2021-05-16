import styled, { css } from "styled-components"

export const Wrapper = styled.section`
  padding: 3rem;
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
    padding: 4rem 0;
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
    /* font-size: 2.5rem;
    gap: 2rem;
    margin: 1rem 0 3rem;
    font-size: 1.7rem;
    color: ${theme.colors.textSecondary}; */
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
