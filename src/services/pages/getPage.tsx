import { GET_PAGE } from "./queries"
import { client } from "services/cliente"

import type { GetPagesQuery } from "gql/graphql"

export const getPage = async (slug: string) => {
  const page = await client.request<GetPagesQuery>(GET_PAGE, {
    slug: slug
  })

  return page
}
