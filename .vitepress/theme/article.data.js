// noinspection JSUnusedGlobalSymbols

/**
 * 用来扫描所有文档
 */

import {createContentLoader} from 'vitepress'
import {parseLang} from '../config/locales'
import {completeData} from '../config/markdown'

export default createContentLoader(['/docs/*.md', '/docs/**/*.md'], {
    includeSrc: true,
    transform(raw) {
        const articles = raw.filter(raw => {
            return raw.frontmatter.metadata !== false
        });
        let locales = {};

        articles.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).forEach((page) => {
            const lang = parseLang(page.url);
            completeData(lang, page.frontmatter, page.src)
            const locale = locales[lang] || (locales[lang] = []);
            locale.push({
                ...page.frontmatter,
                path: page.url
            });
        })
        return locales;
    },
})

