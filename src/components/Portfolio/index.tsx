import { PortfolioItem, PortfolioItemProps } from "components/PortfolioItem"

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
    <div>
      {portfolioData.map((item, index) => {
        return <PortfolioItem {...item} reverse={!(index % 2 === 0)} />
      })}
    </div>
  )
}
