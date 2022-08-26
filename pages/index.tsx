import type { NextPage } from 'next';
import 'remixicon/fonts/remixicon.css';
import { Page } from '../components';
import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';
import styles from '../styles/overlay.module.sass';
import cn from 'classnames';
import Goo from 'gooey-react';
import Gooey from '../components/gooey';

const Home: NextPage = () => {
    return (
        <Page
            title='Dennis Pavlyuk'
            description='Full-Stack Developer'
            style={{
                display: 'inline-block',
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
            }}
        >
            <div style={{ position: 'fixed', zIndex: '-10' }}>
                <Gooey total={6} />
            </div>
            <Header />
            <Main />
            <Footer />
        </Page>
    );
};

export default Home;
