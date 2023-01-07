import styled, { css } from "styled-components"

export const Wrapper = styled.section`
  padding: 2rem 0;
`

export const Title = styled.h3`
  text-align: left;
  font-size: 4rem;
  color: white;
  margin-top: 5rem;
`

export const SubTitle = styled.div`
  ${({ theme }) => css`
    font-size: 2.5rem;
    gap: 2rem;
    margin: 1rem 0 3rem;
    font-size: 1.7rem;
    color: ${theme.colors.textSecondary};

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
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
