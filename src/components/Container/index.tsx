import React from "react"
import * as S from "./styles"

type Props = {
  children: React.ReactNode | string
}
const Container = ({ children, ...props }: Props) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default Container
