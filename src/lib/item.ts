import { MarkdownString } from "./markdown-string"
import { Reference } from "./reference"

export interface Item {
  id: string
  name: string
  description: MarkdownString
  effects?: Reference[]
}