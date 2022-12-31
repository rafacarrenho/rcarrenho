import React from "react"
import { Social } from "components/Social"
import { HiCode } from "react-icons/hi"
import * as S from "./styles"

type Props = {
  footerText: string
}

export const Footer = ({ footerText }: Props) => {
  return (
    <S.Wrapper>
      <S.WrapperContainer>
        <S.IconContainer>
          <HiCode />
        </S.IconContainer>
        <span dangerouslySetInnerHTML={{ __html: footerText }} />
        <hr />
        <Social />
      </S.WrapperContainer>
    </S.Wrapper>
  )
}
