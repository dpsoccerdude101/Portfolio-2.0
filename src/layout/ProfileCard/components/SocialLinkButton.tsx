import styles from '../Header.module.sass';
import overlayStyles from '../../../styles/overlay.module.sass';
import cn from 'classnames';

type SocialLinkButtonProps = {
    link: string;
    iconClassName: string;
};
const SocialLinkButton = ({ link, iconClassName }: SocialLinkButtonProps) => (
    <a
        href={link}
        className={cn(overlayStyles.glassHover, styles.profile__socialLink)}
        rel='noreferrer'
        target='_blank'
    >
        <i className={cn(iconClassName, styles.profile__socialIcon)}></i>
    </a>
);

export default SocialLinkButton;
