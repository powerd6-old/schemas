# Species

Schema: https://schemas.powerd6.org/schemas/species.json

A species contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the species.

## `effects` (optional)

Type: array([reference](reference.md))

A list of effects that this species can provide.

The `type` field should be `effect`.