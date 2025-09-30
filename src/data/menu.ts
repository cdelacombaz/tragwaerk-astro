// src/data/menu.ts
import { getBasedUrl } from '@utils/getBasedUrl';

export const headerMenu = [
    // { name: 'Theme Info', link: '/theme-info' },
    { name: 'Dienstleistungen', link: getBasedUrl('#dienstleistungen') },
    { name: 'Über Uns', link: getBasedUrl('#ueber-uns') },
    { name: 'Portfolio', link: getBasedUrl('#portfolio') },
    // { name: 'Style-Guide', link: '/style-guide', showArrow: false,
    //     children: [
    //         { name: 'Typography', link: '/style-guide#typography' },
    //         { name: 'Colors', link: '/style-guide#colors' },
    //         { name: 'Links', link: '/style-guide#links' },
    //         { name: 'Buttons', link: '/style-guide#buttons' },
    //         { name: 'Forms', link: '/style-guide#forms' },
    //         { name: 'Lists', link: '/style-guide#lists' },
    //     ]
    // }
];

// export const footerMenu = [{ name: 'Style Guide', link: '/style-guide' }];
export const footerMenu = [];

export const legalMenu = [
    { name: 'Impressum', link: getBasedUrl('impressum') },
    { name: 'Datenschutz', link: getBasedUrl('datenschutz') },
];
