import Footer from "components/Footer"
import Header from "components/Header"
import Container from "components/Container"
import Social from "components/Social"

export default function Home() {
  return (
    <>
      <Header />
      <Footer>
        <Container>
          <Social />
        </Container>
      </Footer>
    </>
  )
}
