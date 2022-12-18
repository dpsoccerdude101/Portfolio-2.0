import cn from 'classnames';
import styles from './Main.module.sass';
import overlayStyles from '../../styles/overlay.module.sass';
import useMain from './useMain';
import TabNames from './types/TabNames';
import Tab from './components/Tab';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

const Main = () => {
    const { vm, handleTabChange } = useMain();

    return (
        <main className={styles.main}>
            <section className={cn(styles.filters, styles.container)}>
                {/* Filters tabs */}
                <ul
                    className={cn(styles.filters__content, overlayStyles.glass)}
                    style={{ backdropFilter: 'blur(15px)' }}
                >
                    <Tab
                        title='Projects'
                        handleTabChange={handleTabChange(TabNames.projects)}
                        isActive={vm.activeTab === TabNames.projects}
                    />
                    <Tab
                        title='Skills'
                        handleTabChange={handleTabChange(TabNames.skills)}
                        isActive={vm.activeTab === TabNames.skills}
                    />
                </ul>

                <div className={styles.filters__sections}>
                    {/*	Projects */}
                    <div
                        className={cn(
                            styles.projects__content,
                            vm.activeTab !== TabNames.projects
                                ? styles.disableTab
                                : ''
                        )}
                    >
                        {vm.projectData.map(
                            ({
                                img,
                                id,
                                imgAlt,
                                subtitle,
                                title,
                                projectLink,
                            }) => (
                                <ProjectCard
                                    key={id}
                                    img={img}
                                    imgAlt={imgAlt}
                                    subtitle={subtitle}
                                    title={title}
                                    projectLink={projectLink}
                                />
                            )
                        )}
                    </div>
                    {/*	Skills */}
                    <div
                        className={cn(
                            styles.skills__content,
                            vm.activeTab !== TabNames.skills
                                ? styles.disableTab
                                : ''
                        )}
                    >
                        <SkillCard vm={vm.skillsDataFrontEnd} title='Front-End' />
                        <SkillCard vm={vm.skillsDataBackEnd} title='Back-End' />
                        <SkillCard vm={vm.skillsDataML} title='Machine Learning' />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
