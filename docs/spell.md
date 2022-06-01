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

The `model` field should be `effect`.

# Sample

```json
{
  "id": "strength-in-numbers",
  "name": "Strength In Numbers",
  "description": "Your blood rushes as you see yourself surrounded by foes and allies alike.\nWhether it is the impulse to protect your comrades, or simply the desire to see blood, this energizes you.",
  "learning_requirements": "You must have {.name}[attribute.strength] score of at least 3.",
  "activation_requirements": "You must be bleeding or have a injury.",
  "effects": [
    {
      "type": "effect",
      "id": "increase-strenght-1d6"
    },
    {
      "type": "effect",
      "id": "heal-ally-count"
    }
  ]
}
```