import styled, { css, DefaultTheme } from "styled-components"

type WrapperProps = {
  reverse: boolean | null
}
export const Wrapper = styled.div`
  ${({ reverse }: WrapperProps) => css`
    width: 100%;
    padding: 3rem 0;
    display: flex;

    @media screen and (max-width: 775px) {
      flex-direction: column;
    }
    ${reverse && "flex-flow: row-reverse;"}
    gap: 40px;
    align-items: center;
    margin-bottom: 4rem;
  `}
`

export const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 775px) {
    width: 100%;
  }
`

type TextContainerProps = {
  reverse: boolean
  theme: DefaultTheme
}

export const TextContainer = styled.div`
  ${({ theme, reverse }: TextContainerProps) => css`
    width: 50%;
    @media screen and (max-width: 775px) {
      width: 100%;
    }
    ${reverse && "text-align: right;"}

    h3 {
      font-size: 3rem;
      color: ${theme.colors.white[50]};
      position: relative;
      margin-bottom: 2rem;

      &:after {
        content: "";
        width: 60px;
        position: absolute;
        background-color: ${theme.colors.primary[600]};
        height: 3px;
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

    div {
      display: block;
      margin-top: 2rem;
      font-size: 2.5rem;
      svg {
        color: ${theme.colors.primary[400]};
      }
      span:not(:last-child) {
        margin-right: 16px;
      }
    }

    a {
      display: inline-block;
      font-size: 1.5rem;
      margin: 10px 0;
      padding: 1rem;
      background-color: transparent;
      border: 1px solid ${theme.colors.white[50]};
      color: ${theme.colors.white[50]};
      transition: 0.3s ease;
      font-weight: 600;

      &:hover {
        background-color: ${theme.colors.white[50]};
        color: ${theme.colors.background};
      }
      & + a {
        margin-left: 10px;
      }
    }
  `}
`
