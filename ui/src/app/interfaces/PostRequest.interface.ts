import { Attribute } from '@angular/core';
import { Author } from './Author.interface';

export interface PostRequest {
  title: string;
  date: string;
  author: Author;
  description: string;
  content: string;
  attributes: Attribute[];
}
