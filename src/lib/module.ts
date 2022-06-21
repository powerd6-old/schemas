import {IAuthor} from './author';
import {IMarkdownString} from './markdown-string';

export interface IModule {
  id: string;
  name: string;
  description: IMarkdownString;
  authors: IAuthor[];
  models: {
    '^.$'?: string;
    [k: string]: unknown;
  };
  content?: {
    '^.$'?: {
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
}
