/**
 * Character
 *
 * @module
 */
import {z} from 'zod';
import {SchemaObject} from '../schema';
import {MarkdownString} from '../utils/markdown-string';
import {Name} from '../utils/name';
import {ReferenceForType} from '../utils/reference';
import {AttributeReference} from './attribute';
import {EffectReference} from './effect';
import {FocusReference} from './focus';
import {InjuryReference} from './injury';
import {ItemReference} from './item';
import {SpeciesReference} from './species';
import {SpellReference} from './spell';

const name = 'character';

/**
 * The number of available and total character points
 * this character has available to spend and how many
 * they already used.
 */
export const CharacterPoints = z.object({
  /** A numeric field, equal to or greater than zero. */
  available: z.number().gte(0),
  /** A numeric field, equal to or greater than zero. */
  spent: z.number().gte(0),
});

/**
 * The values of each attribute, as well as a flag to indicate
 * if they are a primary attribute or not.
 */
export const AttributeValues = z.intersection(
  AttributeReference,
  z.object({
    /**
     * The attribute value for the specified [[ Attribute ]].
     *
     * Must be between -3 and 5.
     */
    value: z.number().gte(-3).lte(5),
    /**
     * A flag to indicate if the [[ Attribute ]] is a primary attribute.
     *
     * Only one attribute should have this value as `true` on a character.
     */
    is_primary: z.boolean(),
  })
);

/**
 * A list of how many injuries a character can sustain.
 */
export const InjuryCapacity = z.array(
  z.intersection(
    InjuryReference,
    z.object({
      /**
       * The number of injuries of this type this character can sustain.
       */
      count: z.number().gte(0),
    })
  )
);

/**
 * A list of items and their quantities that a character
 * is in possession of.
 */
export const Inventory = z.array(
  z.intersection(
    ItemReference,
    z.object({
      /**
       * The amount of a certain item a character has.
       *
       * This must be greater than zero.
       */
      amount: z.number().gte(0),
    })
  )
);

export const Character = SchemaObject(name).extend({
  name: Name,
  /**
   * The physical description of the character.
   */
  description: MarkdownString,
  /**
   * A simplified telling of the character's past.
   */
  backstory: MarkdownString,
  species: SpeciesReference,
  character_points: CharacterPoints,
  attribute_values: AttributeValues,
  /** The list of [[ Focus | focuses ]] a character has obtained. */
  acquired_focuses: z.array(FocusReference),
  injury_capacity: InjuryCapacity,
  inventory: Inventory,
  /**
   * The list of [[ Spell | spells ]] a character knows.
   */
  known_spells: z.array(SpellReference),
  /**
   * The list of [[ Effect | effects ]] that are applied to a character.
   */
  effects: z.array(EffectReference),
});

/**
 * A [[ Reference ]] to a [[ Character ]].
 */
export const CharacterReference = ReferenceForType(name);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Character extends z.TypeOf<typeof Character> {}
