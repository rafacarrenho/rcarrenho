import Container from "components/Container"
import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const WrapperContainer = styled(Container)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hr {
      height: 2px;
      background-color: ${theme.colors.title};
      border-radius: 2px;
      border: 0;
      width: 300px;
      max-width: 120px;
      margin-top: 5rem;
    }

    span {
      color: ${theme.colors.textSecondary};
      font-size: 1.6rem;
      line-height: 3rem;
      text-align: center;
      margin-top: 5rem;

      a {
        color: ${theme.colors.text};
        cursor: pointer;
        font-weight: bold;
      }
    }
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    position: absolute;
    left: 50%;
    top: -32px;
    transform: translateX(-50%);

    svg {
      font-size: 64px;
    }
  `}
`
