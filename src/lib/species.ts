import { MarkdownString } from "./markdown-string"
import { Reference } from "./reference"

export interface Species {
  id: string
  name: string
  description: MarkdownString
  effects?: Reference[]
}