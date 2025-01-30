import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Étapes d\'un projet',
      href: getPermalink('/#steps'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    }
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  secondaryLinks: [
    { text: 'Mentions légales', href: getPermalink('/mentions-legales') },
    { text: 'Politique de confidentialité', href: getPermalink('/politique-de-confidentialite') },
    { text: 'CGU', href: getPermalink('/cgu') },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:contact@gregoryleroux.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/gregoryleroux/' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/' },
    // { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/' },
    // { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/lrxgregory' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
