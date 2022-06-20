import { MarkdownString } from "./markdown-string"
import { Reference } from "./reference"

export interface Spell {
  id: string
  name: string
  description: MarkdownString
  learning_requirements: MarkdownString
  activation_requirements?: MarkdownString
  effects: Reference[]
}