import React from "react"
import * as S from "./styles"

type Props = {
  children: React.ReactNode | string
}
const Container = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Container
