import Social from "components/Social"
import { Container } from "next/app"
import React from "react"
import { HiCode } from "react-icons/hi"
import * as S from "./styles"

type Props = {
  footerText: string
}

const Footer = ({ footerText }: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <S.IconContainer>
          <HiCode />
        </S.IconContainer>
        <span dangerouslySetInnerHTML={{ __html: footerText }} />
        <hr />
        <Social />
      </Container>
    </S.Wrapper>
  )
}

export default Footer
