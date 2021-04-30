import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
    position: relative;
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
