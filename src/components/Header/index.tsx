import * as S from "./styles"
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { Container } from "../Container"

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
        <a
          href="https://www.behance.net/rafaelcarrenho"
          target="_blank"
          rel="noreferrer"
        >
          <FaBehance />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-barbosa-carrenho-a98b3254/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/rafacarrenho"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:rafael.carrenho@hotmail.com">
          <IoIosMail />
        </a>
      </S.Links>
      <S.Description>
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
      </S.Description>
    </S.Wrapper>
  </Container>
)
