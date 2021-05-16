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
  wordpress: <FaWordpress aria-label="wordpress" title="wordpress" />,
  react: <FaReact aria-label="React" title="React" />,
  sass: <FaSass aria-label="SASS" title="SASS" />,
  css: <FaCss3 aria-label="CSS" title="CSS" />,
  html: <FaHtml5 aria-label="HTML" title="HTML" />
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
        <div>
          {techs.map((item, index) => (
            <span key={`${title}-${item}-${index}`}>{techsIcon[item]}</span>
          ))}
        </div>
        <button>{button.title}</button>
      </S.TextContainer>
    </S.Wrapper>
  )
}
