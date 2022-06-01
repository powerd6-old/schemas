# Markdown string

Schema: https://schemas.powerd6.org/schemas/markdown-string.json

Markdown string is a string meant to be parsed by a markdown interpreter.

## Extensions

There are some syntax extensions that are intended from the base markdown definition.

### Referencing other content items

You might have seen a structure that looks like a link, but has "weird" expressions on it instead of urls: `{.name}[$.content.currency[?(@.id=='gol')]]`.

These are item references and they work by leveraging JSON-path syntax to dynamically reference other items.

These expressions are delimited by `{}` and `[]`.

The values inside `{}` are what is an accessor for the object queried by the `[]` portion.
The value inside `[]` is a JSON-path expression that instructs which objects from the module definition to reference to.

**Example**:

An expression `{.name}[$.content.currency[?(@.id=='gol')]]` will show the `name` property of the object located at `$.content.currency[?(@.id=='gol')`.

In the example shown in [the module documentation](module.md), this object would be:

```json
{
  "id": "gol",
  "name": "Gol",
  "description": "A small circular coin. The most commonly used currency."
}
```

Therefore, the displayed property would be `"Gol"`.

This results in html similar to `<a href="#currency-gol">Gol</a>`.
