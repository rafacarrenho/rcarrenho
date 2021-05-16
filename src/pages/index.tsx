import Footer from "components/Footer"
import Header from "components/Header"
import Container from "components/Container"
import Social from "components/Social"
import { Portfolio } from "components/Portfolio"

export default function Home() {
  return (
    <>
      <Header />
      <Container>
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
