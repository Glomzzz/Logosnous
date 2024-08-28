import { localesOf } from "../locales";

import { Locale } from "@nolebase/vitepress-plugin-git-changelog/client";

export const locales = localesOf<Locale>({
  en: {
    changelog: {
      title: "Changelog",
      noData: "No recent changes",
      lastEdited: "Last edited {{daysAgo}}",
      lastEditedDateFnsLocaleName: "enUS",
      viewFullHistory: "View full history",
      committedOn: " on {{date}}",
    },
    contributors: {
      title: "Contributors",
      noData: "No contributors",
    },
  },
});
