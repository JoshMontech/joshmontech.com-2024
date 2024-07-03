export interface ISource {
    link: string;
    type: 'github' | 'codepen' | undefined
}
export interface IProject {
    name: string;
    blurb: string;
    link: string;
    toolNames: string[];
    source: ISource;
}

export const PROJECTS: IProject[] = [
    {
        name: 'joshmontech.com',
        source: {link: 'https://github.com/JoshMontech/joshmontech.com-2024', type: 'github'},
        link: 'https://joshmontech.com',
        blurb: 'Design challenge to create intuitive design system and UI with programmatically generated re-usable elements enforcing strong and intuitive layout choices. Made from the ground up with zero templates.',
        toolNames: ['NextJS','React', 'Figma','Tailwind','TypeScript','Vercel', 'Github']
    },
    {
        name: 'Prog Logger',
        source: {link: 'https://github.com/JoshMontech/Prog-Logger', type: 'github'},
        link: 'https://prog-logger.vercel.app/static/102112c3-1b37-4eaf-935f-5433c3e51eb4',
        blurb: 'First proof of data-driven NextJS App Router application with serverside/clientside components. Statistical dashboard to track progress as my friends and I learned how to fight a newly released boss in our favorite video game, Lost Ark. Allows for users to create groups, report sessions within those groups, and view micro/macro breakdowns of their stats.',
        toolNames: ['NextJS','React','Tailwind', 'Prisma', 'SQL', 'TypeScript', 'Vercel', 'Github']
    },
    {
        name: 'Cross-sell Responsive UI',
        source: {link: 'https://codepen.io/jmontech/full/OJYdwJb', type: 'codepen'},
        link: 'https://codepen.io/jmontech/full/OJYdwJb',
        blurb: 'Responsive UI made for .NET cshtml page to intergrate with razor and generate cross-sell page in user flow.',
        toolNames: ['HTML5','CSS3','SASS']
    },
    {
        name: 'bjmontgomery2025.com',
        source: {link: 'https://github.com/JoshMontech/wedding-website', type: 'github'},
        link: 'https://bjmontgomery2025.com',
        blurb: 'Simple responsive save-the-date wedding website and design excercise in typeface and color usage to share with friends and family, with dynamically AI-generated background imagery made with midjourney.',
        toolNames: ['NextJS','React','Tailwind','Vercel', 'Github']
    },
    {
        name: 'Product Page Info Tabs Responsive UI',
        source: {link: 'https://codepen.io/jmontech/pen/mdYmmyp', type: 'codepen'},
        link: 'https://codepen.io/jmontech/pen/mdYmmyp',
        blurb: 'Responsive UI made for .NET cshtml page to intergrate with razor and generate cross-sell page in user flow.',
        toolNames: ['HTML5','CSS3','SASS']
    },
    {
        name: 'Meteor Marker',
        source: {link: 'https://github.com/JoshMontech/brel-meteors', type: 'github'},
        link: 'https://brel-meteors.vercel.app',
        blurb: 'Simple timer mapped to internal timers of boss fights, trivializing what was previously impossible to track in Lost Ark\'s most challenging fight, Infero Brelshaza.',
        toolNames: ['NextJS','React', 'Tailwind', 'Vercel', 'Github']
    },
    {
        name: 'JMontech Next Template',
        source: {link: 'https://github.com/JoshMontech/jmontech-next-template', type: 'github'},
        link: 'https://github.com/JoshMontech/jmontech-next-template',
        blurb: 'NextJS Boilerplate Template built to enforce high scrutiny linting along with precommit hooks with husky, as well as tailwind (before it was automatically added).',
        toolNames: ['NextJS', 'TypeScript', 'Github']
    }
]