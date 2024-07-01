import { FaReact, FaVuejs, FaNodeJs, FaMicrosoft, FaDatabase, FaSass } from "react-icons/fa6"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3, SiHtml5, SiNetlify, SiVercel, SiGithub, SiFigma, SiAdobexd, SiSketch, SiAdobephotoshop, SiPrisma, SiGraphql, SiDatocms    } from "react-icons/si";
import { ArchitectureServiceAWSAmplify, ArchitectureServiceAWSCodeBuild, ArchitectureServiceAmazonSimpleStorageService, ArchitectureServiceAmazonCloudFront, ArchitectureServiceAmazonCognito, ArchitectureServiceAWSLambda, ArchitectureServiceAmazonDynamoDB } from 'aws-react-icons';

export interface IToolSection {
    name: string,
    tools: ITool[]
}

export interface ITool {
    name: string,
    icon: React.ComponentType,
    props?: {}
}

export const TOOL_SECTIONS = [
    {
        name: 'Front End',
        tools: [
            {
                name: 'NextJS',
                icon:  SiNextdotjs
            },
            {
                name: 'React',
                icon:  FaReact
            },
            {
                name: 'TypeScript',
                icon:  SiTypescript
            },
            {
                name: 'Tailwind',
                icon:  SiTailwindcss
            },
            {
                name: 'SASS',
                icon:  FaSass
            },
            {
                name: 'CSS3',
                icon:  SiCss3
            },
            {
                name: 'HTML5',
                icon:  SiHtml5
            },
            {
                name: 'Vue',
                icon:  FaVuejs
            },
        ]
    },
    {
        name: 'Back End',
        tools: [
            {
                name: 'GraphQL',
                icon:  SiGraphql,
            },
            {
                name: 'DatoCMS',
                icon: SiDatocms
            },
            {
                name: 'Prisma',
                icon:  SiPrisma,
            },
            {
                name: 'SQL',
                icon:  FaDatabase,
            },
            {
                name: 'AWS DynamoDB',
                icon:  ArchitectureServiceAmazonDynamoDB,
                props: {size: 16}
            },
            {
                name: '.NET',
                icon:  FaMicrosoft,
            },
            {
                name: 'NodeJS',
                icon:  FaNodeJs,
            },
        ]
    },
    {
        name: 'CI/CD',
        tools: [
            {
                name: 'Github',
                icon:  SiGithub,
            },
            {
                name: 'AWS Amplify',
                icon:  ArchitectureServiceAWSAmplify,
                props: {size: 16}
            },
            {
                name: 'AWS CloudFront',
                icon:  ArchitectureServiceAmazonCloudFront,
                props: {size: 16}
            },
            {
                name: 'AWS CodeBuild',
                icon:  ArchitectureServiceAWSCodeBuild,
                props: {size: 16}
            },
            {
                name: 'AWS S3',
                icon:  ArchitectureServiceAmazonSimpleStorageService,
                props: {size: 16}
            },
            {
                name: 'AWS Lambda',
                icon:  ArchitectureServiceAWSLambda,
                props: {size: 16}
            },
            {
                name: 'AWS Cognito',
                icon:  ArchitectureServiceAmazonCognito,
                props: {size: 16}
            },
            {
                name: 'Netlify',
                icon:  SiNetlify,
            },
            {
                name: 'Vercel',
                icon:  SiVercel,
            },
        ]
    },
    {
        name: 'Design',
        tools: [
            {
                name: 'Figma',
                icon:  SiFigma,
            },
            {
                name: 'AdobeXD',
                icon:  SiAdobexd,
            },
            {
                name: 'AdobePS',
                icon:  SiAdobephotoshop,
            },
            {
                name: 'Sketch',
                icon:  SiSketch,
            },
        ]
    }
]