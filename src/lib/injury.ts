import { Reference } from "./reference"

export interface Injury {
  id: string
  name: string
  description: MarkdownString
  effects?: Reference[]
}