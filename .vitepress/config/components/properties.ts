import { Property } from "@nolebase/vitepress-plugin-page-properties/client";
import { localesOf } from "../locales";

export const excludes = [
  'index.md','tag.md','archive.md'
]

export const properties = localesOf<Property<"progress" | "tags">[]>( {
  en: [
    {
      key: "tags",
      type: "tags",
      title: "Tags",
    },
    {
      key: "progress",
      type: "progress",
      title: "Progress",
    },
    {
      key: "wordCount",
      type: "dynamic",
      title: "Word Count",
      options: {
        type: "wordsCount",
      },
    },
    {
      key: "readingTime",
      type: "dynamic",
      title: "Reading Time",
      options: {
        type: "readingTime",
        dateFnsLocaleName: "en",
      },
    },
  ],
})
