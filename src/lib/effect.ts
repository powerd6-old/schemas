import { MarkdownString } from "./markdown-string"

export interface Effect {
  id: string
  name: string
  description: MarkdownString
}
