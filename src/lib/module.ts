import { Author } from "./author"
import { MarkdownString } from "./markdown-string"

export interface Module {
  id: string
  name: string
  description: MarkdownString
  authors: Author[]
  models: {
    "^.$"?: string
    [k: string]: unknown
  }
  content?: {
    "^.$"?: {
      [k: string]: unknown
    }[]
    [k: string]: unknown
  }
}