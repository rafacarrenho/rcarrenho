import styled, { css, DefaultTheme } from "styled-components"

type WrapperProps = {
  reverse: boolean | null
}
export const Wrapper = styled.main`
  ${({ reverse }: WrapperProps) => css`
    width: 100%;
    padding: 3rem;
    display: flex;
    ${reverse && "flex-flow: row-reverse;"}
    gap: 40px;
    align-items: center;
    margin-bottom: 4rem;
  `}
`

export const Image = styled.img`
  width: 50%;
`

type TextContainerProps = {
  reverse: boolean
  theme: DefaultTheme
}

export const TextContainer = styled.div`
  ${({ theme, reverse }: TextContainerProps) => css`
    width: 50%;
    ${reverse && "text-align: right;"}

    h3 {
      font-size: 4rem;
      color: ${theme.colors.white[50]};
      position: relative;
      margin-bottom: 2rem;

      &:after {
        content: "";
        width: 60px;
        position: absolute;
        background-color: ${theme.colors.white[50]};
        height: 4px;
        ${reverse ? "right: 0;" : "left: 0;"}
        bottom: -2px;
        border-radius: 2px;
      }
    }

    p {
      font-size: 1.7rem;
      font-weight: 400;
      color: ${theme.colors.textSecondary};
      strong {
        color: ${theme.colors.text};
      }
    }

    span {
      display: block;
      margin-top: 2rem;
      font-size: 2.5rem;
      svg:not(:last-child) {
        margin-right: 16px;
      }
    }

    button {
      margin: 20px 0;
      padding: 1rem 2rem;
      background-color: transparent;
      border: 1px solid ${theme.colors.white[50]};
      color: ${theme.colors.white[50]};
      transition: 0.3s ease;
      font-weight: 600;

      &:hover {
        background-color: ${theme.colors.white[50]};
        color: ${theme.colors.background};
      }
    }
  `}
`
