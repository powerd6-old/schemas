import { MarkdownString } from "./markdown-string"

export interface Rule {
  id: string
  name: string
  description: MarkdownString
}
