# Injury

Schema: https://schemas.powerd6.org/schemas/injury.json

An item contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the item is and how it looks.

## `effects` (optional)

Type: array([reference](reference.md))

A list of effects that this item can provide.

The `model` field should be `effect`.

# Sample

[injury.json](examples/injury.json ':include :type=code')