# Character

Schema: https://schemas.powerd6.org/schemas/character.json

A character contains the following properties:

## `id`

Type: string

A unique identifier

## `name`

Type: string

The name of the character.

## `character_points`

Type: object

The amount of total and available points for the character.

### `available`

Type: integer

The number of unspent character points for the character.

Must be larger or equal than zero.

### `total`

Type: integer

The total number of character points for the character.

Must be larger or equal than zero.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the character is and how it looks.

## `backstory` (optional)

Type: [markdown-string](markdown-string.md)

The backstory of the character.

## `species`

Type: string

The [species](species.md) `id` for this character.

## `attribute_values`

Type: array(object)

A list of attributes and their values.

### `attribute_values[].attribute_id`

Type: string

The [attribute](attribute.md) `id` in question.

### `attribute_values[].value`

Type: integer

The value for the attribute.

## `acquired_focuses`

Type: array(object)

A list of the focuses the character has acquired.

### `acquired_focuses[].focus_id`

Type: string

The [focus](focus.md) `id` in question.

## `health_capacity`

Type: array(object)

A list of [injuries](injuries.md) with the number of injuries of that type that the character can have.

### `health_capacity[].injury_id`

Type: string

The [injury](injury.md) `id` in question.

### `health_capacity[].count`

Type: integer

The amount of the injury type in question that the character can have.

## `inventory`

Type: array(object)

A list of [items](item.md) that the character owns.

### `inventory[].item_id`

Type: string

The [item](item.md) `id` in question.

### `inventory[].amount`

Type: integer

The amount of the item that the character can have.

## `known_spells`

Type: array(object)

A list of [spells](spell.md) that the character knows.

### `known_spells[].spell_id`

Type: string

The [spell](spell.md) `id` in question.

## `effects`

Type: array(object)

A list of [effects](effect.md) that the character has affecting them.

### `effects[].effect_id`

Type: string

The [effect](effect.md) `id` in question.

# Character sample

```json
{
  "id": "ajah",
  "name": "Ajah, the red",
  "character_points": {
    "available": 3,
    "total": 15
  },
  "description": "",
  "backstory": "",
  "species": "naga",
  "attribute_values": [
    {
      "attribute_id": "perception",
      "value": 2
    },
    {
      "attribute_id": "strength",
      "value": 1
    },
    // {
    //   "attribute_id": "charisma",
    //   "value": 0
    // },
    // Can be omitted to represent 0
    {
      "attribute_id": "agility",
      "value": 3
    },
    {
      "attribute_id": "wisdom",
      "value": -1
    },
    {
      "attribute_id": "dexterity",
      "value": -2
    }
  ],
  "acquired_focuses": [
    {
      "focus_id": "awareness"
    },
    {
      "focus_id": "speed"
    }
  ],
  "health_capacity": [
    {
      "injury_id": "light",
      "count": 4
    },
    {
      "injury_id": "medium",
      "count": 3
    },
    {
      "injury_id": "harsh",
      "count": 1
    }
  ],
  "inventory": [
    {
      "item_id": "sword",
      "amount": 1
    },
    {
      "item_id": "health_potion",
      "amount": 10
    }
  ],
  "known_spells": [
    {
      "spell_id": "flash"
    },
    {
      "spell_id": "smoke_screen"
    }
  ],
  "effects": [
    {
      "effect_id": "blessing_verot"
    }
  ]
}
```
