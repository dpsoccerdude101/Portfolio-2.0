import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './Main.module.sass';
import overlayStyles from '../../styles/overlay.module.sass';
import {
    MainProps,
    projectData,
    skillsDataBackEnd,
    skillsDataFrontEnd,
    skillsDataML,
} from './Main.props';
import { isMobile } from 'react-device-detect';

export default function Main({ ...props }: MainProps): JSX.Element {
    const [activeTab, setActiveTab] = useState<'projects' | 'skills'>(
        'projects'
    );

    return (
        <main {...props} className={styles.main}>
            <section className={cn(styles.filters, styles.container)}>
                {/* Filters tabs */}
                <ul
                    className={cn(styles.filters__content, overlayStyles.glass)}
                    style={{ backdropFilter: 'blur(15px)' }}
                >
                    <button
                        className={cn(
                            styles.filters__button,
                            overlayStyles.glassHover,
                            overlayStyles.glass,
                            overlayStyles.glassSecondLayer,
                            activeTab === 'projects' && overlayStyles.glassElev2
                        )}
                        style={{ backdropFilter: 'blur(15px)' }}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={cn(
                            styles.filters__button,
                            overlayStyles.glassHover,
                            overlayStyles.glass,
                            overlayStyles.glassSecondLayer,
                            activeTab === 'skills' && overlayStyles.glassElev2
                        )}
                        style={{ backdropFilter: 'blur(15px)' }}
                        onClick={() => setActiveTab('skills')}
                    >
                        Skills
                    </button>
                </ul>

                <div className={styles.filters__sections}>
                    {/*	Projects */}
                    <div
                        className={cn(
                            styles.projects__content,
                            activeTab !== 'projects' && styles.disableTab
                        )}
                    >
                        {projectData.map((item) => (
                            <article
                                className={styles.projects__card}
                                key={item.id}
                            >
                                <img src={item.img} alt={item.imgAlt} />

                                <div className={styles.projects__modal}>
                                    <div>
                                        <span
                                            className={
                                                styles.projects__subtitle
                                            }
                                        >
                                            {item.subtitle}
                                        </span>
                                        <h3 className={styles.projects__title}>
                                            {item.title}
                                        </h3>
                                        <a
                                            href={item.projectLink}
                                            className={cn(
                                                styles.projects__button,
                                                styles.button,
                                                styles.projects__small
                                            )}
                                            title={item.title}
                                        >
                                            <i className='ri-link'></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    {/*	Skills */}
                    <div
                        className={cn(
                            styles.skills__content,
                            activeTab !== 'skills' && styles.disableTab
                        )}
                    >
                        {/* Front-end */}
                        <div
                            className={cn(
                                styles.skills__area,
                                overlayStyles.glass
                            )}
                        >
                            <h3 className={styles.skills__title}>Front-End</h3>

                            <div className={styles.skills__box}>
                                <div className={styles.skills__group}>
                                    {skillsDataFrontEnd.map((item) => (
                                        <div
                                            className={styles.skills__data}
                                            key={item.id}
                                        >
                                            <i className={item.icon}></i>

                                            <h3 className={styles.skills__name}>
                                                {item.skill}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Back-end */}
                        <div
                            className={cn(
                                styles.skills__area,
                                overlayStyles.glass
                            )}
                        >
                            <h3 className={styles.skills__title}>Back-End</h3>

                            <div className={styles.skills__box}>
                                <div className={styles.skills__group}>
                                    {skillsDataBackEnd.map((item) => (
                                        <div
                                            className={styles.skills__data}
                                            key={item.id}
                                        >
                                            <i className={item.icon}></i>

                                            <div>
                                                <h3
                                                    className={
                                                        styles.skills__name
                                                    }
                                                >
                                                    {item.skill}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* ML */}
                        <div
                            className={cn(
                                styles.skills__area,
                                overlayStyles.glass
                            )}
                        >
                            <h3 className={styles.skills__title}>
                                Machine-Learning
                            </h3>

                            <div className={styles.skills__box}>
                                <div className={styles.skills__group}>
                                    {skillsDataML.map((item) => (
                                        <div
                                            className={styles.skills__data}
                                            key={item.id}
                                        >
                                            <i className={item.icon}></i>

                                            <div>
                                                <h3
                                                    className={
                                                        styles.skills__name
                                                    }
                                                >
                                                    {item.skill}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
