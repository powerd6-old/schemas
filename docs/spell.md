# Spell

Schema: https://schemas.powerd6.org/schemas/spell.json

A spell contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the effect and what it causes.

## `learning_requirements` (optional)

Type: [markdown-string](markdown-string.md)

The description of what conditions must be met for the spell to become available for learning.

## `activation_requirements` (optional)

Type: [markdown-string](markdown-string.md)

The description of what conditions must be met so that the spell can be activated.

## `effects`

Type: array([reference](reference.md))

A list of effects that this spell causes when activate.

The `type` field should be `effect`.