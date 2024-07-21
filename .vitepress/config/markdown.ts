import type {MarkdownOptions} from "vitepress";
import {InlineLinkPreviewElementTransform} from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
import {BiDirectionalLinks} from "@nolebase/markdown-it-bi-directional-links";
import {UnlazyImages} from '@nolebase/markdown-it-unlazy-img'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import {cwd} from "node:process";
import {locales as tagLocales} from '../config/components/tag';
import {locales as metadataLocales} from '../config/components/metadata'
import {categories} from "./components/categories";

export const markdown: MarkdownOptions = {
    lineNumbers: true,

    config: (md) => {
        md.use(InlineLinkPreviewElementTransform)
        md.use(BiDirectionalLinks({
            dir: cwd(),
        }))
        md.use(UnlazyImages(), {
            imgElementTag: 'NolebaseUnlazyImg',
        })
        md.use(markdownItMathjax3)
    },
};

export function completeData(lang: string, data: any, src: string) {
    if (!data.title) {
        const start = src.indexOf('#');
        if (start !== -1) {
            const end = src.indexOf('\n', start);
            data.title = src.slice(start + 2, end);
        } else {
            data.title = metadataLocales[lang].untitled
        }
    }
    if (!data.tags) {
        data.tags = [tagLocales[lang].none]
    }
    if (!data.category) {
        data.category = 'none'
    }
    if (!data.icon) {
        data.icon = categories[data.category].icon
    }
}
