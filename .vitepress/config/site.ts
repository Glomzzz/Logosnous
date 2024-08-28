import { localesOf } from "./locales";

export const image = './assets/logo.png';

export const repoURL = 'https://github.com/Glomzzz/Librorum/tree/root-mode'

export interface Site{
  title:string,
  description:string,
  unknown:string
}

export const locales = localesOf({
  root:{
    title: 'Glom Logosnous',
    description: 'A blog about technology, life, and philosophy.',
    link: '/',
    unknown: 'unknown.md',
  }
});