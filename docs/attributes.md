# Attribute

Schema: https://schemas.powerd6.org/schemas/attribute.json

An attribute contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `abbreviation`

Type: string

A 3 character abbreviation for the attribute.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the attribute and what it encompasses.

## `focuses`

Type: array([focus](focus.md))

An array of exactly two focuses that relate to the attribute.