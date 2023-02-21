import styles from './Header.module.sass';
import overlayStyles from '../../styles/overlay.module.sass';
import cn from 'classnames';
import SocialLinkButton from './components/SocialLinkButton';
import ProfilePicture from './components/ProfilePicture';
import useProfileCard from './useProfileCard';

const ProfileCard = () => {
    const { vm } = useProfileCard();

    return (
        <header className={cn(styles.profile)}>
            <ProfilePicture imgSrc={vm.profilePic} />
            <div
                className={cn(
                    styles.profile__container,
                    overlayStyles.glass,
                    styles.grid
                )}
            >
                <div className={cn(styles.profile__data)}>
                    <h2 className={styles.profile__name}>Dennis Pavlyuk</h2>
                    <h3 className={styles.profile__profession}>
                        Senior Software Engineer
                    </h3>

                    <ul className={styles.profile__social}>
                        {vm.socialData.map((social) => (
                            <SocialLinkButton
                                key={`${social.id}${social.href}`}
                                link={social.href}
                                iconClassName={social.icon}
                            />
                        ))}
                    </ul>
                </div>

                <div className={cn(styles.profile__info, styles.grid)}>
                    {vm.profileInfo.map((info) => (
                        <div
                            className={styles.profile__infoGroup}
                            key={`${info.id}${info.title}`}
                        >
                            <h3 className={styles.profile__infoNumber}>
                                {info.title}
                            </h3>
                            <p className={styles.profile__infoDescription}>
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className={cn(styles.profile__buttons, styles.innerElement)}
                >
                    <a
                        href={vm.resume}
                        style={{ backdropFilter: 'blur(15px)' }}
                        className={cn(styles.button, overlayStyles.glassHover)}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Download CV <i className='ri-download-line'></i>
                    </a>

                    <div className={styles.profile__buttonsSmall}>
                        <a
                            href='mailto:me@dennispavlyuk.com'
                            style={{ backdropFilter: 'blur(15px)' }}
                            className={cn(
                                styles.button,
                                styles.button__small,

                                overlayStyles.glassHover
                            )}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='ri-mail-line'></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProfileCard;
