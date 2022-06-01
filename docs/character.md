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

Type: [reference](reference.md)

The [species](species.md) for this character.

The `model` field should be `species`.

## `attribute_values`

Type: array([reference](reference.md))

A list of attributes and their values.

The `model` field should be `effect`.

### `attribute_values[].value`

Type: integer

The value for the attribute. This value must be between `-3` and `5`.

## `acquired_focuses`

Type: array([reference](reference.md))

A list of the focuses the character has acquired.

The `model` field should be `focus`.

## `health_capacity`

Type: array([reference](reference.md))

A list of [injuries](injury.md) with the number of injuries of that type that the character can have.

The `model` field should be `injury`.

### `health_capacity[].count`

Type: integer

The amount of the injury type in question that the character can have.

## `inventory`

Type: array([reference](reference.md))

A list of [items](item.md) that the character owns.

The `model` field should be `item`.

### `inventory[].amount`

Type: integer

The amount of the item that the character can have.

## `known_spells`

Type: array([reference](reference.md))

A list of [spells](spell.md) that the character knows.

The `model` field should be `spell`.

## `effects`

Type: array([reference](reference.md))

A list of [effects](effect.md) that the character has affecting them.

The `model` field should be `effect`.

# Sample

[character.json](examples/character.json ':include :type=code')