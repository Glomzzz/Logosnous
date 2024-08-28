import { localesOf } from "../locales.js"
 
export type Config = {
    author: string,
    authorLink:string,
    unknownTime: string,
    untitled: string,
    original:{
        name:string,
        time:string,
    }
    reprint:{
        name:string,
        time:string,
    },
    viewCount:string,
    category:string,
    tags:string
}

export const config = {
    showViewCount: false
}

export const locales = localesOf<Config>({
    root : {
        author: 'Author',
        authorLink: 'Visit author\'s homepage',
        unknownTime: 'Unknown time',
        untitled: 'No title',
        original: {
            name: 'Original',
            time: 'Publication time',
        },
        reprint: {
            name: 'Reprint',
            time: 'Reprint time',
        },
        viewCount: 'View count',
        category: 'Category',
        tags: 'Tags',
    },
})
