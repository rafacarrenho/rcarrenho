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
        <a href="https://nextjs.org/" target="_blank">
          NextJS
        </a>
      </span>
      <span>
        Hospedado na{" "}
        <a href="https://vercel.com/" target="_blank">
          Vercel
        </a>
      </span>
      <hr />
      <S.Links>
        <a href="https://www.behance.net/rafaelcarrenho" target="_blank">
          <FaBehance />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-barbosa-carrenho-a98b3254/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/rafacarrenho" target="_blank">
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
