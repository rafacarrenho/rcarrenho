import * as S from "./styles"
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

const Main = () => (
  <S.Wrapper>
    <S.Title>
      Desenvolvedor, Especialista em Front End, ReactJS, NextJS, Comunicativo,
      Organizado
    </S.Title>
    <S.Links>
      <S.Line />
      <a href="https://stackoverflow.com/">
        <FaBehance />
      </a>
      <a href="https://www.linkedin.com/in/rafael-barbosa-carrenho-a98b3254/">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/rafacarrenho">
        <FaGithub />
      </a>
      <a href="mailto:rafael.carrenho@hotmail.com">
        <IoIosMail />
      </a>
    </S.Links>
    <S.Description>
      <p>
        Olá, sou o <strong>Rafael Carrenho</strong>, desenvolvedor{" "}
        <strong>Front End</strong> especialista em <strong>JavaScript</strong>,
        em especial com <strong>ReactJS</strong> e <strong>NextJS</strong> com
        mais de <strong>2 anos de experiencias</strong> no mesmos e{" "}
        <strong>8 anos de experiencia</strong> na area de{" "}
        <strong>tecnologia</strong>.
      </p>{" "}
      <p>
        Entre minhas habilidades que me permitem ser um profissional
        extremamente qualificado estão a ótima comunicação, organização, atenção
        aos detalhes, além de vontade e empenho para sempre estar melhorando.
      </p>
    </S.Description>
  </S.Wrapper>
)

export default Main
