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

Type: array([reference](reference.md))

An array of exactly two references to the [focuses](focus.md) that relate to the attribute.

The `model` field should be `effect`.

# Sample

```json
{
  "id": "strength",
  "name": "Strength",
  "abbreviation": "STR",
  "description": "Strength is related to the physical quality of a character's body.",
  "focuses": [
    {
      "model": "focus",
      "id": "power"
    },
    {
      "model": "focus",
      "id": "endurance"
    }
  ]
}
```