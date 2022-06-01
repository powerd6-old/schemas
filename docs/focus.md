# Focus

Schema: https://schemas.powerd6.org/schemas/focus.json

A focus contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

The description of the focus and what it encompasses.

## `attribute`

Type: [reference](reference.md)

The [attribute](attribute.md) that relate to this focus.

The `model` field should be `attribute`.

# Sample

[focus.json](examples/focus.json ':include :type=code')