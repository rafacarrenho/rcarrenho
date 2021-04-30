import React from "react"
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import * as S from "./styles"

const Social = () => {
  return (
    <S.Wrapper>
      <span>@2021</span>
      <span>
        Criado com{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          NextJS
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noreferrer"
        >
          Styled Components
        </a>
        ,{" "}
        <a href="https://graphql.org/" target="_blank" rel="noreferrer">
          GraphQL
        </a>
      </span>
      <span>
        Alimento com{" "}
        <a href="https://graphcms.com/" target="_blank" rel="noreferrer">
          GraphCMS
        </a>{" "}
        e hospedado na{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>
      </span>
      <hr />
      <S.Links>
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
    </S.Wrapper>
  )
}

export default Social
