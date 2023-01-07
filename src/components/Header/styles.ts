import styled, { css } from "styled-components"

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: left;
    font-size: 2.8rem;
    color: ${theme.colors.title};

    @media screen and (min-width: 500px) {
      font-size: 4rem;
    }

    @media screen and (min-width: 1000px) {
      font-size: 5.6rem;
    }
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 400;
    margin-left: 7rem;
    color: ${theme.colors.textSecondary};

    span {
      display: block;
    }

    strong {
      color: ${theme.colors.text};
    }

    @media screen and (max-width: 500px) {
      margin-left: 0;
      font-size: 1.4rem;
    }
  `}
`

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    font-size: 2.5rem;
  }
`

export const Line = styled.div`
  ${({ theme }) => css`
    width: 16rem;
    height: 2px;
    background-color: ${theme.colors.textSecondary}; ;
  `}
`
