# Item

Schema: https://schemas.powerd6.org/schemas/item.json

An effect contains the following properties:

## `id`

Type: string

A unique identifier

## `name`

Type: string

The human readable name

## `description`

Type: [markdown-string](markdown-string.md)

The description of the effect and what it causes.

## `effects` (optional)

Type: array([effect](effect.md))

A list of effects that this item can provide.