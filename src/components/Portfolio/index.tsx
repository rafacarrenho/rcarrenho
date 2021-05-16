import { PortfolioItem, PortfolioItemProps } from "components/PortfolioItem"

import * as S from "./styles"

type PortfolioData = Omit<PortfolioItemProps, "reverse">

const portfolioData: PortfolioData[] = [
  {
    image: "/img/mockup.png",
    button: { title: "Call to Action" },
    title: "My Site",
    description:
      "My site description My site description My site description My site description My site description My site description My site description",
    techs: ["wordpress"]
  },
  {
    image: "/img/mockup.png",
    button: { title: "Call to Action" },
    title: "My Site",
    description:
      "My site description My site description My site description My site description My site description My site description My site description",
    techs: ["wordpress"]
  },
  {
    image: "/img/mockup.png",
    button: { title: "Call to Action" },
    title: "My Site",
    description:
      "My site description My site description My site description My site description My site description My site description My site description",
    techs: ["wordpress", "react", "sass"]
  },
  {
    image: "/img/mockup.png",
    button: { title: "Call to Action" },
    title: "My Site",
    description:
      "My site description My site description My site description My site description My site description My site description My site description",
    techs: ["wordpress", "sass"]
  }
]

export const Portfolio = () => {
  return (
    <S.Wrapper>
      <S.Title>Portfólio</S.Title>
      <S.SubTitle>
        <S.Line />
        <span>
          Aqui você encontra alguns de meus projetos que são publicos e suas
          respectivas técnologias, porem, tambem tenho outros privados que não
          posso divulgar por questão contratuais, mas caso haja interesse me
          chame que posso mostrar.
        </span>
      </S.SubTitle>
      {portfolioData.map((item, index) => {
        return (
          <PortfolioItem
            key={`${item.title}-${index}`}
            {...item}
            reverse={!(index % 2 === 0)}
          />
        )
      })}
    </S.Wrapper>
  )
}
