import { gql } from "graphql-request"

export const GET_HOME_PAGE = gql`
  query getPages($slug: String) {
    page(where: { slug: $slug }) {
      title
      slug
      subtitle {
        html
      }
      portfolioTitle
    }
    portfolios {
      title
      description
      techs
      image {
        url
      }
      link
    }
  }
`
