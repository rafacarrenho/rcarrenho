import { gql } from "graphql-request"

export const GET_PAGE = gql`
  query getPages($slug: String) {
    page(where: { slug: $slug }) {
      title
      slug
      subtitle {
        html
      }
      portfolioTitle
      footerText {
        html
      }
    }
    portfolios {
      title
      description
      techs
      image {
        url
      }
      link
      github
    }
  }
`
