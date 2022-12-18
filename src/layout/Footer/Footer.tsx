import styles from './Footer.module.sass';
import cn from 'classnames';

const Footer = () => (
    <footer className={cn(styles.footer, styles.container)}>
        <span className={styles.footer__copy}>
            &#169; Dennis Pavlyuk. All rights reserved
        </span>
    </footer>
);

export default Footer;
