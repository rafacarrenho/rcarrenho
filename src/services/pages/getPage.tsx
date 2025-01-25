import { GetPagesQuery } from "gql/graphql"
import { GET_PAGE } from "./queries"
import { client } from "services/cliente"

export const getPage = async (slug: string) => {
  const page = await client.request<GetPagesQuery>(GET_PAGE, {
    slug: slug
  })

  return page
}
