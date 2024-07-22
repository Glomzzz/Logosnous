
import { localesOf } from "./locales";

type Author = {
    name:string,
    icon?:string,
    link?:string,
}

export const locales = localesOf<Record<string,Author>>({})

locales['root'] =    {
    'Glomzzz': {
        name: 'Glomzzz',
        icon: '/public/assets/authors/glomzzz.png',
        link: 'https://github.com/Glomzzz',
    },
    'none': {
        name: '未知作者',
        icon: '/public/assets/authors/unknown.svg',
    }
}

locales.en =  {
    'Glomzzz': {
        name: 'Glomzzz',
        icon: '/public/assets/authors/glomzzz.png',
        link: 'https://github.com/Glomzzz',
    },
    'none': {
        name: 'Unknown',
        icon: '/public/assets/authors/unknown.svg',
    }
}
export const unknownAuthorId = 'none'
export const ownerId = 'Glomzzz'
