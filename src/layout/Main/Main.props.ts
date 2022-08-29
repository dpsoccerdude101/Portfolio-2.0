import { DetailedHTMLProps, HTMLAttributes } from 'react';
import RocMaidanImg from '/images/projects/rocmaidan.webp';
import MicCheckImg from '/images/projects/miccheck.webp';
import ScanPandaImg from '/images/projects/scanpanda.webp';
import KalynaImg from '/images/projects/kalyna.webp';

export type MainProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

interface ProjectDataType {
    id: number;
    img: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    projectLink: string;
}

interface SkillsDataType {
    id: number;
    skill: string;
    icon: string;
}

export const projectData: ProjectDataType[] = [
    {
        id: 0,
        img: RocMaidanImg,
        imgAlt: 'RocMaidan',
        title: 'RocMaidan',
        subtitle: 'Humanitarian & Medical Aid for Ukraine',
        projectLink: 'https://www.rocmaidan.org/',
    },
    {
        id: 1,
        img: MicCheckImg,
        imgAlt: 'MicCheck App',
        title: 'MicCheck App',
        subtitle: 'Social Media & Ticketing for Music Venues',
        projectLink: 'https://www.themiccheck.com/',
    },
    {
        id: 2,
        img: ScanPandaImg,
        imgAlt: 'ScanPanda',
        title: 'ScanPanda',
        subtitle: 'Word-of-Mouth Marketing with Monetary Incentives',
        projectLink: 'https://scanpanda.org/',
    },
    {
        id: 3,
        img: KalynaImg,
        imgAlt: 'Registration Form',
        title: 'Kalyna-UAFGR',
        subtitle: 'Registration Application for Dancers',
        projectLink: 'https://www.uafgr.org/registration-form/',
    },
];

export const skillsDataFrontEnd: SkillsDataType[] = [
    {
        id: 0,
        skill: 'HTML5',
        icon: 'ri-html5-line',
    },
    {
        id: 1,
        skill: 'CSS3',
        icon: 'ri-css3-line',
    },
    {
        id: 2,
        skill: 'JavaScript',
        icon: 'ri-braces-line',
    },
    {
        id: 3,
        skill: 'TypeScript',
        icon: 'ri-medal-line',
    },
    {
        id: 4,
        skill: 'React/NextJS',
        icon: 'ri-reactjs-line',
    },
    {
        id: 5,
        skill: 'Git',
        icon: 'ri-git-branch-line',
    },
    {
        id: 6,
        skill: 'Web Components',
        icon: 'ri-focus-line',
    },
];

export const skillsDataBackEnd: SkillsDataType[] = [
    {
        id: 0,
        skill: 'NodeJS/NestJS',
        icon: 'ri-server-line',
    },
    {
        id: 1,
        skill: 'Firebase',
        icon: 'ri-fire-line',
    },
    {
        id: 2,
        skill: 'NoSQL',
        icon: 'ri-database-line',
    },
];

export const skillsDataML: SkillsDataType[] = [
    {
        id: 0,
        skill: 'Python',
        icon: 'ri-code-line',
    },
    {
        id: 1,
        skill: 'Yolov5',
        icon: 'ri-eye-line',
    },
    {
        id: 2,
        skill: 'NVIDIA cuDDN',
        icon: 'ri-lightbulb-line',
    },
    {
        id: 3,
        skill: 'Google Colab',
        icon: 'ri-google-line',
    },
];
