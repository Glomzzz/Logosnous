import {localesOf} from "../locales.js"

export type Category = {
    name: string,
    icon: string
}

type Config = Record<string, string>

export const locales = localesOf<Config>({
    root: {
        tech: '技术',
        life: '生活',
        philosophy: '哲学',
        none: '无分类'
    },
    'en': {
        tech: 'Tech',
        life: 'Life',
        none: 'No Category'
    }
})

export const categories: Record<string, Category> = {
    'tech': {
        name: 'tech',
        icon: '/public/assets/components/categories/tech.svg'
    },
    'life': {
        name: 'life',
        icon: '/public/assets/components/categories/life.svg'
    },
    'philosophy': {
        name: 'philosophy',
        icon: '/public/assets/components/categories/philosophy.svg'
    },
    'none': {
        name: 'none',
        icon: '/public/assets/components/categories/none.svg'
    }
}


export function genCategories(lang: string): any[] {
    return Object.keys(categories).map(key => {
        return {
            text: locales[lang][key],
            link: '/archive?category=' + key,
            activeMatch: '/archive?category=' + key
        }
    })
}
