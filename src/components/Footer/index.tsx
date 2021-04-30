import React from "react"
import { HiCode } from "react-icons/hi"
import * as S from "./styles"

type Props = {
  children: React.ReactNode
}

const Footer = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <S.IconContainer>
        <HiCode />
      </S.IconContainer>
      {children}
    </S.Wrapper>
  )
}

export default Footer
