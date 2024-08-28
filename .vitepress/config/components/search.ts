import  { DefaultTheme } from 'vitepress/theme';




export const provider = 'local';

export const search :Record<string, { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
| { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions }> = {
  'local':{
    provider: 'local',
  },
}