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

Type: [species](species.md)

The species for this character.

## `attribute_values`

Type: array(array([reference](reference.md),integer))

A list of tuples containing a [reference](reference.md) to [attributes](attributes.md) paired with the value of this attribute.

## `acquired_focuses`

Type: array([reference](reference.md))

A list of [references](reference.md) to the [focuses](focus.md) that the character has acquired.

## `health_capacity`

Type: array(array([reference](reference.md),integer))

A list of [references](reference.md) to the [injuries](injuries.md) with the number of injuries of that type that the character can have.

## `inventory`

Type: array([reference](reference.md))

A list of [references](reference.md) to the [focuses](focus.md) that the character has acquired.

## `known_spells`

Type: array([reference](reference.md))

A list of [references](reference.md) to the [spells](spell.md) that the character knows.

## `effects`

Type: array([reference](reference.md))

A list of [references](reference.md) to the [effects](effect.md) that the character has affecting them.
