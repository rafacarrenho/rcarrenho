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
