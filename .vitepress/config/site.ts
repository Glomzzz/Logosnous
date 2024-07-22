import { localesOf } from "./locales";

export const image = './public/assets/logo.png';

export const repoURL = 'https://github.com/Glomzzz/Librorum/tree/root-mode'

export interface Site{
  title:string,
  description:string,
  unknown:string
}

export const locales = localesOf({
  root:{
    title: 'Glom的心智档案',
    description: '心智成长档案库。',
    link: '/',
    unknown: 'unknown.md',
  }
});