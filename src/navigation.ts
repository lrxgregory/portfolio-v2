import { defaultLang, type Language, t } from "./utils/i18n";
import { getPermalink } from "./utils/permalinks";

export const getHeaderData = (lang: Language = defaultLang) => ({
  links: [
    {
      text: t("nav.services", lang),
      href: '#services',
    },
    {
      text: t("nav.steps", lang),
      href: "#steps",
    },
    {
      text: t("nav.faq", lang),
      href: "#faq",
    },
    {
      text: t("nav.blog", lang),
      href: getPermalink(`/blog`),
    },
  ],
});

export const getFooterData = (lang: Language = defaultLang) => ({
  links: [],
  secondaryLinks: [
    {
      text: t("footer.legal", lang),
      href: getPermalink(`/${lang}/mentions-legales`),
    },
    {
      text: t("footer.privacy", lang),
      href: getPermalink(`/${lang}/politique-de-confidentialite`),
    },
    {
      text: t("footer.terms", lang),
      href: getPermalink(`/${lang}/cgu`),
    },
  ],
  socialLinks: [
    {
      ariaLabel: "Mail",
      icon: "tabler:mail",
      href: "mailto:contact@gregoryleroux.com",
    },
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/in/gregoryleroux/",
    },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/lrxgregory",
    },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
});
