# Module

Schema: https://schemas.powerd6.org/schemas/module.json

A Module contains the following properties:

## `id`

Type: string

A unique identifier

## `name`

Type: string

The human readable name

## `description`

Type: [markdown-string](markdown-string.md)

A description of the module and what it provides

## `author`

Type: array([author](author.md))

The list of authors of the module

## `models`

Type: map\<string, string\>

An array of all the json schemas for the objects that will be present in the `content` map.

The keys used correspond to the key of the `content` map, effectively linking the schemas to their contents. The values point to the URI of the desired schema.

Prefer using `$ref` to link to an existing schema rather than redefining it inline.

## `content` (optional)

Type: map\<string, array(object)\>

A map where the keys correspond to the title of a model and the value is an array of objects of that model type.

### `content["model-type"].value`

Type: object

Each object in the value array is an object that follows the schema identified by the key.


# Module sample

```json
{
  "id": "sample-module",
  "name": "Sample Module",
  "description": "A sample module that showcases how modules should be structured",
  "models": {
    "item": {
      "$ref": "/schema/items"
    },
    "currency": {
      "$ref": "/schema/currency"
    },
    "gods": {
      "$ref": "https://example.com/schemas/gods"
    }
  },
  "content": {
    "item": [
      {
        "id": "sword",
        "name": "Sword",
        "description": "This is a big blade",
        "cost": [
          "10 {.name}[$.content.currency[?(@.id=='gol')]]"
        ]
      }
    ],
    "currency": [
      {
        "id": "gol",
        "name": "Gol",
        "description": "A small circular coin. The most commonly used currency."
      }
    ],
    "gods": [
      {
        "id": "verot",
        "name": "Verot, the sage",
        "description": "Verot is the timeworn god of knowledge and wisdom."
      }
    ]
  }
}
```