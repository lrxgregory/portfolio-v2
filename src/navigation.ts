import { defaultLang, type Language } from "./utils/i18n";
import { getPermalink } from "./utils/permalinks";

export const getHeaderData = (lang: Language = defaultLang) => ({
  links: [
    {
      text: "Services",
      href: getPermalink(`/${lang}#services`),
    },
    {
      text: "Étapes d'un projet",
      href: getPermalink(`/${lang}#steps`),
    },
    {
      text: "FAQ",
      href: getPermalink(`/${lang}#faq`),
    },
    {
      text: "Blog",
      href: getPermalink(`/${lang}/blog`),
    },
  ],
});

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: "Mentions légales", href: getPermalink("/mentions-legales") },
    {
      text: "Politique de confidentialité",
      href: getPermalink("/politique-de-confidentialite"),
    },
    { text: "CGU", href: getPermalink("/cgu") },
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
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/' },
    // { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/' },
    // { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/' },
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
};
