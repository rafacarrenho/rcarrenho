import React from "react"
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import * as S from "./styles"

export const Social = () => {
  return (
    <S.Wrapper>
      <S.Links>
        <a
          href="https://www.behance.net/rafaelcarrenho"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para o Behance"
        >
          <FaBehance />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-barbosa-carrenho-a98b3254/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para o LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/rafacarrenho"
          target="_blank"
          rel="noreferrer"
          aria-label="Link para o GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:rafael.carrenho@hotmail.com"
          aria-label="Link para o Email"
        >
          <IoIosMail />
        </a>
      </S.Links>
    </S.Wrapper>
  )
}
