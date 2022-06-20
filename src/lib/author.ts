import { MarkdownString } from "./markdown-string"

export interface Author {
  id: string
  name: string
  biography?: MarkdownString
}
