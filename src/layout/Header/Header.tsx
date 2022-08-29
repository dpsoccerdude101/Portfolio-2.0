import { HeaderProps, socialData, profileInfo } from './Header.props';
import styles from './Header.module.sass';
import overlayStyles from '../../styles/overlay.module.sass';
import cn from 'classnames';
import profilePic from '/images/capture.webp';
import resume from '/files/DennisPavlyukResume (3).pdf';

const Header = ({ ...props }: HeaderProps): JSX.Element => (
    <header {...props} className={cn(styles.profile)}>
        <div
            className={cn(styles.profile__border)}
            style={{ backdropFilter: 'blur(15px)' }}
        >
            <div className={styles.profile__perfil}>
                <img src={profilePic} alt='' />
            </div>
        </div>
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
                    ReactJS Developer
                </h3>

                <ul className={styles.profile__social}>
                    {socialData.map((social) => (
                        <a
                            key={`${social.id}${social.href}`}
                            href={social.href}
                            className={cn(
                                overlayStyles.glassHover,
                                styles.profile__socialLink
                            )}
                            rel='noreferrer'
                            target='_blank'
                        >
                            <i
                                className={cn(
                                    social.icon,
                                    styles.profile__socialIcon
                                )}
                            ></i>
                        </a>
                    ))}
                </ul>
            </div>

            <div className={cn(styles.profile__info, styles.grid)}>
                {profileInfo.map((info) => (
                    <div
                        className={styles.profile__infoGroup}
                        key={`${info.id}${info.title}`}
                    >
                        <h3 className={styles.profile__infoNumber}>
                            {info.title}
                        </h3>
                        <p className={styles.profile__infoDesctiption}>
                            {info.desctiption}
                        </p>
                    </div>
                ))}
            </div>

            <div className={cn(styles.profile__buttons, styles.innerElement)}>
                <a
                    href={resume}
                    style={{ backdropFilter: 'blur(15px)' }}
                    className={cn(
                        styles.button,

                        overlayStyles.glassHover
                    )}
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

export default Header;
