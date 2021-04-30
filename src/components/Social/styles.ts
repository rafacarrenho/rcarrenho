import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    margin-top: 5rem;

    span {
      color: ${theme.colors.textSecondary};
      font-size: 1.6rem;
      line-height: 3rem;

      a {
        color: ${theme.colors.text};
        cursor: pointer;
        font-weight: bold;
      }
    }

    hr {
      height: 2px;
      background-color: ${theme.colors.title};
      border-radius: 2px;
      border: 0;
      width: 300px;
      max-width: 120px;
      margin-top: 5rem;
    }
  `}
`

export const Links = styled.div`
  margin: 5rem auto;
  display: flex;
  gap: 32px;
  a {
    font-size: 3rem;
  }
`
