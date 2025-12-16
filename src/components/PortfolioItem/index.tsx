import {
  FaCss3,
  FaHtml5,
  FaLeaf,
  FaReact,
  FaSass,
  FaWordpress
} from "react-icons/fa"
import Image from "next/legacy/image"
import { SiGraphql, SiStyledcomponents } from "react-icons/si"
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
  github: string
  reverse: boolean
}

const techsIcon = {
  wordpress: <FaWordpress aria-label="wordpress" title="wordpress" />,
  react: <FaReact aria-label="React" title="React" />,
  sass: <FaSass aria-label="SASS" title="SASS" />,
  css: <FaCss3 aria-label="CSS" title="CSS" />,
  html: <FaHtml5 aria-label="HTML" title="HTML" />,
  leaflet: <FaLeaf aria-label="Leaflet" title="Leaflet" />,
  graphql: <SiGraphql aria-label="graphql" title="graphql" />,
  styledComponents: (
    <SiStyledcomponents
      aria-label="styled components"
      title="styled components"
    />
  )
}

export const PortfolioItem = ({
  image,
  title,
  description,
  reverse = false,
  link,
  github,
  techs
}: PortfolioItemProps) => {
  return (
    <S.Wrapper $reverse={reverse}>
      <S.ImageContainer>
        <Image
          src={image.url}
          alt={title}
          loading="lazy"
          height={328}
          width={525}
        />
      </S.ImageContainer>
      <S.TextContainer $reverse={reverse}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          {techs.map((item, index) => (
            <span key={`${title}-${item}-${index}`}>{techsIcon[item]}</span>
          ))}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Ver código
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Ver projeto
        </a>
      </S.TextContainer>
    </S.Wrapper>
  )
}
