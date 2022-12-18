import cn from 'classnames';
import styles from '../Main.module.sass';
import { ProjectModel } from '../types/ProjectModel';

const ProjectCard = ({
    img,
    imgAlt,
    subtitle,
    title,
    projectLink,
}: Partial<ProjectModel>) => (
    <article className={styles.projects__card}>
        <img src={img} alt={imgAlt} />

        <div className={styles.projects__modal}>
            <div>
                <span className={styles.projects__subtitle}>{subtitle}</span>
                <h3 className={styles.projects__title}>{title}</h3>
                <a
                    href={projectLink}
                    className={cn(
                        styles.projects__button,
                        styles.button,
                        styles.projects__small
                    )}
                    title={title}
                >
                    <i className='ri-link'></i>
                </a>
            </div>
        </div>
    </article>
);

export default ProjectCard;
