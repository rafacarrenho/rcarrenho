import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-ca-central-1.graphcms.com/v2/ckmpbus7h7v4m01z2f8sn8xku/master",
  documents: "src/services/**/*.{ts,tsx,graphql,gql}",
  generates: {
    "src/gql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config
