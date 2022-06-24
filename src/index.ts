import {ISchemaModel} from './lib/schema-model';
import {IAttribute} from './lib/schemas/attribute';
import {IAuthor} from './lib/schemas/author';
import {ICharacter} from './lib/schemas/character';
import {IEffect} from './lib/schemas/effect';
import {IFocus} from './lib/schemas/focus';
import {IInjury} from './lib/schemas/injury';
import {IItem} from './lib/schemas/item';
import {IMarkdownString} from './lib/schemas/markdown-string';
import {IModule} from './lib/schemas/module';
import {IReference} from './lib/schemas/reference';
import {IRule} from './lib/schemas/rule';
import {ISpecies} from './lib/schemas/species';
import {ISpell} from './lib/schemas/spell';

export type SchemaModel = ISchemaModel;

export type Reference = IReference;
export type MarkdownString = IMarkdownString;

export type Attribute = IAttribute;
export type Author = IAuthor;
export type Character = ICharacter;
export type Effect = IEffect;
export type Focus = IFocus;
export type Injury = IInjury;
export type Item = IItem;
export type Module = IModule;
export type Rule = IRule;
export type Species = ISpecies;
export type Spell = ISpell;
