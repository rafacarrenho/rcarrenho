import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-ca-central-1.graphcms.com/v2/ckmpbus7h7v4m01z2f8sn8xku/master",
  documents: "src/services/**/queries.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
}

export default config
