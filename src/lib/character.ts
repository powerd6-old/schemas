import { MarkdownString } from "./markdown-string"
import { Reference } from "./reference"

export interface Character {
  id: string
  name: string
  character_points: {
    available?: number
    total?: number
    [k: string]: unknown
  }
  description: MarkdownString
  backstory?: MarkdownString
  species: Reference
  attribute_values: Reference[]
  acquired_focuses: Reference[]
  health_capacity: Reference[]
  inventory: Reference[]
  known_spells: Reference[]
  effects: Reference[]
}