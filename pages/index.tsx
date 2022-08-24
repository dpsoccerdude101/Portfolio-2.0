import type { NextPage } from 'next';
import 'remixicon/fonts/remixicon.css';
import { Page } from '../components';
import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';
import styles from '../styles/overlay.module.sass';
import cn from 'classnames';

const Home: NextPage = () => {
    return (
        <Page title='Dennis Pavlyuk' description='Full-Stack Developer'>
            <div className={cn(styles.overlay, styles.wrapper)}>
                {/* <div className={cn(styles.div, styles.div1)}></div>
                <div className={cn(styles.div, styles.div2)}></div>
                <div className={cn(styles.div, styles.div3)}></div>
                <div className={cn(styles.div, styles.div4)}></div>
                <div className={cn(styles.div, styles.div5)}></div> */}
            </div>
            <Header />
            <Main />
            <Footer />
        </Page>
    );
};

export default Home;
