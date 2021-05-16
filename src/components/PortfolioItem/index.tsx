import { FaCss3, FaHtml5, FaReact, FaSass, FaWordpress } from "react-icons/fa"
import * as S from "./styles"

type Techs = "wordpress" | "react" | "css" | "sass"

export type PortfolioItemProps = {
  image: string
  title: string
  description: string
  techs: Techs[]
  button: {
    title: string
  }
  reverse: boolean
}

const techsIcon = {
  wordpress: <FaWordpress />,
  react: <FaReact />,
  sass: <FaSass />,
  css: <FaCss3 />,
  html: <FaHtml5 />
}

export const PortfolioItem = ({
  image,
  title,
  description,
  button,
  reverse = false,
  techs
}: PortfolioItemProps) => {
  return (
    <S.Wrapper reverse={reverse}>
      <S.Image src={image} alt={title} />
      <S.TextContainer reverse={reverse}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{techs.map((item) => techsIcon[item])}</span>
        <button>{button.title}</button>
      </S.TextContainer>
    </S.Wrapper>
  )
}
