import { PortfolioItem, PortfolioItemProps } from "components/PortfolioItem"
import * as S from "./styles"

type PortfolioData = Omit<PortfolioItemProps, "reverse">

type PortfolioProps = {
  title: string
  portfolio: PortfolioData[]
}

export const Portfolio = ({ title, portfolio }: PortfolioProps) => {
  return (
    <S.Wrapper>
      <S.Title>Portfólio</S.Title>
      <S.SubTitle>
        <S.Line />
        <span>{title}</span>
      </S.SubTitle>
      {portfolio.map((item, index) => {
        return (
          <PortfolioItem
            key={`${item?.title}-${index}`}
            {...item}
            reverse={!(index % 2 === 0)}
          />
        )
      })}
    </S.Wrapper>
  )
}
