import * as S from "./styles"
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import Container from "../Container"

const Main = () => (
  <Container>
    <S.Wrapper>
      <S.Title>
        Desenvolvedor, Especialista em Front End, ReactJS, NextJS, Comunicativo,
        Organizado
      </S.Title>
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
        <span>
          Olá, sou o <strong>Rafael Carrenho</strong>, desenvolvedor{" "}
          <strong>Front End</strong> especialista em <strong>JavaScript</strong>
          , em especial com <strong>ReactJS</strong> e <strong>NextJS</strong>{" "}
          com mais de <strong>2 anos de experiências</strong> no mesmos e{" "}
          <strong>8 anos de experiência</strong> na área de{" "}
          <strong>tecnologia</strong>.
        </span>
        <span>
          Entre minhas habilidades que me permitem ser um profissional
          extremamente qualificado estão a ótima comunicação, organização,
          atenção aos detalhes, além de vontade e empenho para sempre estar
          melhorando.
        </span>
      </S.Description>
    </S.Wrapper>
  </Container>
)

export default Main
