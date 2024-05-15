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
    title: '禁书目录例子',
    description: '技术知识库。',
    link: '/',
    unknown: 'unknown.md',
  },
  'en':{
    title: 'Librorum Example',
    description: 'Technical knowledge base.',
    link: '/en/',
    unknown: 'en/unknown.md',
  }
});