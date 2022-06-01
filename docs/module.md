# Module

Schema: https://schemas.powerd6.org/schemas/module.json

A Module contains the following properties:

## `id`

Type: string

A unique identifier.

## `name`

Type: string

The human readable name.

## `description`

Type: [markdown-string](markdown-string.md)

A description of the module and what it provides.

## `author`

Type: array([author](author.md))

The list of authors of the module.

## `models`

Type: map\<string, object\>

An array of all the json schemas for the objects that will be present in the `content` map.

### `models.key`

The keys used correspond to the key of the `content` map, effectively linking the schemas to their contents.

### `models[key]` (value)

The values point to the URI of the desired schema.

## `content` (optional)

Type: map\<string, array(object)\>

A map where the keys correspond to the title of a model and the value is an array of objects of that model type.

### `content["model-type"].value`

Type: object

Each object in the value array is an object that follows the schema identified by the key.

# Sample

[module.json](examples/module.json ':include :type=code')