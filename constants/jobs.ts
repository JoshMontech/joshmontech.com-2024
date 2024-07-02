export interface IJob {
    iconPath: string;
    name: string;
    role: string;
    blurb: string;
    link: string;
    toolNames: string[];
}

export const JOBS: IJob[] = [
    {
        iconPath: '/lootlabs.svg',
        name: 'Loot Labs',
        link: 'https://boxed.gg',
        role: 'Senior Front End Developer',
        blurb: 'Lead precursory NextJS 14 and Amplify V6 migration followed by redesign of site UX, UI, and architecture, including Zustand global state management, SEO optimization, and static/SSR strategy. Aligned TailwindCSS theme with Figma design system.',
        toolNames: ['NextJS','GraphQL','Figma', 'React','Tailwind','TypeScript', 'AWS Amplify', 'AWS Cognito', 'Github']
    },
    {
        iconPath: '/bas.png',
        name: 'BuildASign-Cimpress',
        link: 'https://cimpress.com/our-businesses',
        role: 'Senior Front End Developer',
        blurb: 'Served as UX and frontend architecture SME. Collaborated with team and executive stakeholders to create internal CMS and AWS CI/CD pipeline for product and site templates. Lead efforts to maximum SEO search score by reaching maximum Google Core Web Vitals scores across our company`s sites. Lead mentor for 15-person off-shore Indian team, in charge of front end standardization and code reviews.',
        toolNames: ['NextJS', 'Tailwind', 'React', 'SASS', 'GraphQL', 'DatoCMS', '.NET', 'Netlify', 'SQL', 'AWS CloudFront', 'AWS CodeBuild', 'AWS S3', 'AWS Lambda', 'AdobeXD']
    },
    {
        iconPath: '/adjacent.png',
        name: 'Adjacent Tech-EnChoice',
        link: 'https://www.enchoice.com/Adjacent-Tech',
        role: 'UX Developer',
        blurb: 'Designed, engineered, developed, and shipped client onPrem applications, building them from the ground up, fulfilling multi-million dollar contracts across the United States and Canada.',
        toolNames: ['React', 'TypeScript','Sketch', 'AdobePS', 'SASS', 'SQL']
    },
    {
        iconPath: '/ibm.svg',
        name: 'IBM Design',
        link: 'https://www.ibm.com/design',
        role: 'Front End Developer Co-op',
        blurb: 'Collaborated with incubator to research, pitch, develop and ship Weather Underground`s first air quality solution in Southeast Asia. Proved in SEA, was adopted across wunderground.com North America in 2021.',
        toolNames: ['React', 'TypeScript', 'HTML5', 'CSS3', 'NodeJS', 'Sketch']
    },
    {
        iconPath: '/uship.webp',
        name: 'uShip',
        link: 'https://www.uship.com',
        role: 'Front End Intern',
        blurb: 'Developed and shipped first site redesign made in React, homepage exposed to widest breadth of users in the US, Germany, and greater EU.',
        toolNames: ['React', 'HTML5', 'CSS3', '.NET']
    }
]