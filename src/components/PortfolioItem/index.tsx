import { FaCss3, FaHtml5, FaReact, FaSass, FaWordpress } from "react-icons/fa"
import * as S from "./styles"

type Techs = "wordpress" | "react" | "css" | "sass"

export type PortfolioItemProps = {
  image: {
    url: string
  }
  title: string
  description: string
  techs: Techs[]
  link: string
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
  reverse = false,
  link,
  techs
}: PortfolioItemProps) => {
  return (
    <S.Wrapper reverse={reverse}>
      <S.Image src={image.url} alt={title} />
      <S.TextContainer reverse={reverse}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {techs.map((item, index) => (
            <span key={`${title}-${item}-${index}`}>{techsIcon[item]}</span>
          ))}
        </div>
        {/* <button>Ver código</button> */}
        <a href={link}>Ver projeto</a>
      </S.TextContainer>
    </S.Wrapper>
  )
}
