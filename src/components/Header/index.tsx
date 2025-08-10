import * as S from "./styles"
import { Container } from "../Container"
import { Social } from "components/Social"

type HeaderProps = {
  title: string
  subtitle: string
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <Container>
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Links>
        <S.Line />
        <Social />
      </S.Links>
      <S.Description>
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
      </S.Description>
    </S.Wrapper>
  </Container>
)
