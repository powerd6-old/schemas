# Rule

Schema: https://schemas.powerd6.org/schemas/rule.json

A rule contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

The rule's description.

# Sample

```json
{
  "id": "dice-roll-advantage",
  "name": "Advantages",
  "description": "If something or someone is assisting the player in the action, or the action relates to a focus which the character has, roll with advantage.\nRolling with advantage means you will roll two dice, then choose the one that is most favourable to you."
}
```
