import { FaReact, FaVuejs, FaNodeJs, FaMicrosoft, FaDatabase, FaSass, FaAws } from "react-icons/fa6"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiNetlify, SiVercel, SiGithub, SiFigma, SiAdobexd, SiSketch, SiAdobephotoshop, SiPrisma, SiGraphql, SiDatocms, SiAmazondynamodb, SiAwsamplify, SiAmazonaws, SiAwslambda, SiAmazoncognito  } from "react-icons/si";

export interface IToolSection {
    name: string,
    tools: ITool[]
}

interface IIconProps {
    fill?: string;
    className?: string;
}

export interface ITool {
    name: string,
    icon: React.ComponentType<IIconProps>,
    color?: string;
}

export const TOOL_SECTIONS = [
    {
        name: 'Front End',
        tools: [
            {
                name: 'NextJS',
                icon:  SiNextdotjs,
                color: 'black',
            },
            {
                name: 'React',
                icon:  FaReact,
                color: '#087EA4'
            },
            {
                name: 'TypeScript',
                icon:  SiTypescript,
                color: '#2F74C0'
            },
            {
                name: 'Tailwind',
                icon:  SiTailwindcss,
                color: '#38BDF8'
            },
            {
                name: 'SASS',
                icon:  FaSass,
                color: '#BF407F'
            },
            {
                name: 'CSS3',
                icon:  SiCss3,
                color: '#1758A7'
            },
            {
                name: 'HTML5',
                icon:  SiHtml5,
                color: '#DD4B25'
            },
            {
                name: 'Vue',
                icon:  FaVuejs,
                color: '#41B883'
            },
        ]
    },
    {
        name: 'Back End',
        tools: [
            {
                name: 'GraphQL',
                icon:  SiGraphql,
                color: '#DE33A6'
            },
            {
                name: 'DatoCMS',
                icon: SiDatocms,
                color: '#FF593D'
                
            },
            {
                name: 'Prisma',
                icon:  SiPrisma,
                color: '#5A67D8'
            },
            {
                name: 'SQL',
                icon:  FaDatabase,
                color: '#D47131'
            },
            {
                name: 'AWS DynamoDB',
                icon:  SiAmazondynamodb,
                color: '#2B6DB1'
            },
            {
                name: '.NET',
                icon:  FaMicrosoft,
                color: '#5A2C8C'
            },
            {
                name: 'NodeJS',
                icon:  FaNodeJs,
                color: '#8CBF3D'
            },
        ]
    },
    {
        name: 'CI/CD',
        tools: [
            {
                name: 'Github',
                icon:  SiGithub,
                color: '#8957E5'
            },
            {
                name: 'AWS Amplify',
                icon:  SiAwsamplify,
                color: '#8668E8'
            },
            {
                name: 'AWS CloudFront',
                icon:  SiAmazonaws,
                color: '#D94F41'
            },
            {
                name: 'AWS CodeBuild',
                icon:  SiAmazonaws,
                color: '#71973C'
            },
            {
                name: 'AWS S3',
                icon:  SiAmazonaws,
                color: '#539630'
            },
            {
                name: 'AWS Lambda',
                icon:  SiAwslambda,
                color: '#D16312'
            },
            {
                name: 'AWS Cognito',
                icon:  SiAmazoncognito,
                color: '#CC1D28'
            },
            {
                name: 'Netlify',
                icon:  SiNetlify,
                color: '#08B7B5'
            },
            {
                name: 'Vercel',
                icon:  SiVercel,
                color: 'black'
            },
        ]
    },
    {
        name: 'Design',
        tools: [
            {
                name: 'Figma',
                icon:  SiFigma,
                color: '#EB4B1D'
            },
            {
                name: 'AdobeXD',
                icon:  SiAdobexd,
                color: '#450134'
            },
            {
                name: 'AdobePS',
                icon:  SiAdobephotoshop,
                color: '#011D33'
            },
            {
                name: 'Sketch',
                icon:  SiSketch,
                color: '#F6B402'
            },
        ]
    }
]