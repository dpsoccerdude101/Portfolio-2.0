import styles from '../Header.module.sass';
import cn from 'classnames';

const ProfilePicture = ({ imgSrc }: { imgSrc: string }) => (
    <div
        className={cn(styles.profile__border)}
        style={{ backdropFilter: 'blur(15px)' }}
    >
        <div className={styles.profile__perfil}>
            <img src={imgSrc} alt='' />
        </div>
    </div>
);

export default ProfilePicture;
