import { HeaderProps, socialData, profileInfo } from './Header.props';
import styles from './Header.module.sass';
import overlayStyles from '../../styles/overlay.module.sass';
import cn from 'classnames';
import Tilt from 'react-parallax-tilt';

export default function Header({ ...props }: HeaderProps): JSX.Element {
    return (
        <header {...props} className={cn(styles.profile)}>
            <Tilt
                gyroscope={true}
                tiltAxis='y'
                tiltMaxAngleY={1.5}
                className={cn(
                    overlayStyles.glass,
                    overlayStyles.glassHover,
                    styles.profile__container,
                    styles.grid,
                    styles.parallaxEffect
                )}
            >
                <div className={cn(styles.profile__data, styles.innerElement)}>
                    <div
                        className={cn(
                            styles.profile__border,

                        )}
                        style={{ backdropFilter: 'blur(15px)' }}
                    >
                        <img src='./images/capture.webp' alt='' />
                    </div>
                    <h2 className={styles.profile__name}>Dennis Pavlyuk</h2>
                    <h3 className={styles.profile__profession}>
                        ReactJS Developer
                    </h3>

                    <ul className={styles.profile__social}>
                        {socialData.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                style={{ backdropFilter: 'blur(15px)' }}
                                className={cn(
                                    overlayStyles.glass,
                                    overlayStyles.glassSecondLayer,
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

                <div
                    className={cn(
                        styles.profile__info,
                        styles.grid,
                        styles.innerElement
                    )}
                >
                    {profileInfo.map((info) => (
                        <div
                            className={styles.profile__infoGroup}
                            key={info.id}
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

                <div
                    className={cn(styles.profile__buttons, styles.innerElement)}
                >
                    <a
                        href='/files/DennisPavlyukResume (3).pdf'
                        style={{ backdropFilter: 'blur(15px)' }}
                        className={cn(
                            styles.button,
                            overlayStyles.glass,
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
                                overlayStyles.glass,
                                overlayStyles.glassHover
                            )}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='ri-mail-line'></i>
                        </a>
                    </div>
                </div>
            </Tilt>
        </header>
    );
}
