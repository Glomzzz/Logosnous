import { localesOf } from "../locales.js"


type Config = {
    title: string
    titlePost: string
    unknownYear: string
    unkownMouth: string
    year: string,
    zodiac: string
    years: string[]
    months: string[]
}



export const locales = localesOf<Config>({
    root : {
        title: '{count} posts, to be continued...',
        titlePost: '( {count} posts )',
        year: '',
        unknownYear: 'Unknown Year',
        unkownMouth: 'Unknown Month',
        zodiac: 'Zodiac',
        years: ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
})