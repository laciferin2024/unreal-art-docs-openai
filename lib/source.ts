import { docs } from "@/.source"
import { loader } from "fumadocs-core/source"
import { createOpenAPI } from "fumadocs-openapi/server"

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const openapi = createOpenAPI({
  // generateCodeSamples(endpoint) {
  //   return []
  // },
})
