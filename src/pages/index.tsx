import Footer from "components/Footer"
import Header from "components/Header"
import Container from "components/Container"
import Social from "components/Social"
import { Portfolio } from "components/Portfolio"
import { Techs } from "components/Techs"
import client from "graphql/cliente"
import { GetStaticProps } from "next"
import { GET_HOME_PAGE } from "graphql/queries/getHomePage"

type HomeProps = {
  page: {
    title: string
    subtitle: {
      html: string
    }
  }
}

export default function Home({ page }: HomeProps) {
  return (
    <>
      <Header title={page.title} subtitle={page.subtitle.html} />
      <Container>
        <Techs />
        <Portfolio />
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
  const { page } = await client.request(GET_HOME_PAGE, {
    slug: "home"
  })

  return {
    revalidate: 60,
    props: { page }
  }
}
