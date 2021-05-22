import Footer from "components/Footer"
import Header from "components/Header"
import Container from "components/Container"
import Social from "components/Social"
import { Portfolio } from "components/Portfolio"
import { Techs } from "components/Techs"
import client from "graphql/cliente"
import { GetStaticProps } from "next"
import { GET_HOME_PAGE } from "graphql/queries/getHomePage"
import { PortfolioItemProps } from "components/PortfolioItem"

type PortfolioData = Omit<PortfolioItemProps, "reverse">

type HomeProps = {
  page: {
    title: string
    subtitle: {
      html: string
    }
    portfolioTitle: string
  }
  portfolios: PortfolioData[]
}

export default function Home({ page, portfolios }: HomeProps) {
  return (
    <>
      <Header title={page.title} subtitle={page.subtitle.html} />
      <Container>
        <Techs />
        <Portfolio title={page.portfolioTitle} portfolio={portfolios} />
      </Container>
      <Footer>
        <Container>
          <Social />
        </Container>
      </Footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { page, portfolios } = await client.request(GET_HOME_PAGE, {
    slug: "home"
  })

  return {
    revalidate: 60,
    props: { page, portfolios }
  }
}
