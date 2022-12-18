import profilePic from '/images/capture.webp';
import resume from '/files/DennisPavlyukResume.pdf';
import { SocialDataModel } from './types/SocialDataModel';
import { ProfileInfoModel } from './types/ProfileInfoModel';

const socialData: SocialDataModel[] = [
    {
        id: 0,
        social: 'Telegram',
        href: 'https://t.me/dpsoccerdude101',
        icon: 'ri-telegram-line',
    },
    {
        id: 1,
        social: 'Instagram',
        href: 'https://www.instagram.com/dennis.pavlyuk/',
        icon: 'ri-instagram-line',
    },
    {
        id: 2,
        social: 'GitHub',
        href: 'https://github.com/dpsoccerdude101',
        icon: 'ri-github-line',
    },
    {
        id: 3,
        social: 'Linkedin',
        href: 'https://www.linkedin.com/in/dennis-pavlyuk-54b83610b/	',
        icon: 'ri-linkedin-line',
    },
];

const profileInfo: ProfileInfoModel[] = [
    {
        id: 0,
        title: 'BrightFi',
        description: 'Current company',
    },
    {
        id: 1,
        title: 5,
        description: 'Projects',
    },
    {
        id: 1,
        title: '2+',
        description: 'Years experience',
    },
];

const useProfileCard = () => ({
    vm: { socialData, profileInfo, profilePic, resume },
});

export default useProfileCard;
