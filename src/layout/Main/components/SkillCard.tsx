import cn from 'classnames';
import styles from '../Main.module.sass';
import overlayStyles from '../../../styles/overlay.module.sass';
import { SkillsModel } from '../types/SkillsModel';

const SkillCard = ({ vm, title }: { vm: SkillsModel[]; title: String }) => (
    <div className={cn(styles.skills__area, overlayStyles.glass)}>
        <h3 className={styles.skills__title}>{title}</h3>
        <div className={styles.skills__box}>
            <div className={styles.skills__group}>
                {vm.map((item) => (
                    <div className={styles.skills__data} key={item.id}>
                        <i className={item.icon}></i>
                        <h3 className={styles.skills__name}>{item.skill}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default SkillCard;
