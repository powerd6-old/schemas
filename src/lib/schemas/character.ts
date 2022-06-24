import {z} from 'zod';
import {_EffectReference} from './effect';
import {_MarkdownString} from './markdown-string';
import {_Reference} from './reference';
import {_SpeciesReference} from './species';
import {_AttributeReference} from './attribute';
import {_FocusReference} from './focus';
import {_InjuryReference} from './injury';
import {_ItemReference} from './item';
import {_Spell} from './spell';

export const _Character = z.object({
  id: z.string(),
  name: z.string(),
  character_points: z.object({
    available: z.number().gte(0),
    total: z.number().gte(0),
  }),
  description: _MarkdownString,
  backstory: _MarkdownString.optional(),
  species: z.intersection(_SpeciesReference, _Reference),
  attribute_values: z.intersection(
    _AttributeReference,
    _Reference,
    z.object({
      value: z.number().gte(-3).lte(5),
      is_primary: z.boolean(),
    })
  ),
  acquired_focuses: z.array(z.intersection(_FocusReference, _Reference)),
  health_capacity: z.array(
    z.intersection(
      _InjuryReference,
      _Reference,
      z.object({
        count: z.number().gte(0),
      })
    )
  ),
  inventory: z.array(
    z.intersection(
      _ItemReference,
      _Reference,
      z.object({
        amount: z.number().gte(0),
      })
    )
  ),
  known_spells: z.array(z.intersection(_Spell, _Reference)),
  effects: z.array(z.intersection(_EffectReference, _Reference)),
});

export const _CharacterReference = z.object({
  model: z.literal('character'),
});

export type Character = z.infer<typeof _Character>;
