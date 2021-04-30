import styled, { css } from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: left;
    font-size: 6rem;
    color: ${theme.colors.title};

    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 400;
    margin-left: 7rem;
    color: ${theme.colors.textSecondary};
    strong {
      color: ${theme.colors.text};
    }

    @media screen and (max-width: 500px) {
      margin-left: 0;
    }
  `}
`

export const Links = styled.div`
  display: flex;
  font-size: 2.5rem;
  gap: 2rem;
  align-items: center;
  margin: 4rem 0;
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    height: 2px;
    background-color: ${theme.colors.textSecondary}; ;
  `}
`
