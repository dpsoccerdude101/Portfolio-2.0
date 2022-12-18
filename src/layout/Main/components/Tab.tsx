import cn from 'classnames';
import styles from '../Main.module.sass';
import overlayStyles from '../../../styles/overlay.module.sass';

const Tab = ({
    title,
    handleTabChange,
    isActive,
}: {
    title: string;
    handleTabChange: () => void;
    isActive: boolean;
}) => (
    <button
        className={cn(
            styles.filters__button,
            overlayStyles.glassHover,
            overlayStyles.glass,
            overlayStyles.glassSecondLayer,
            isActive ? overlayStyles.glassElev2 : ''
        )}
        style={{ backdropFilter: 'blur(15px)' }}
        onClick={handleTabChange}
    >
        {title}
    </button>
);

export default Tab;
