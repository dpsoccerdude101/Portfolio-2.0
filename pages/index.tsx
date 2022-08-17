import type { NextPage } from 'next';
import 'remixicon/fonts/remixicon.css';
import { Page } from '../components';
import Header from '../layout/Header/Header';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';
import styles from './overlay.module.sass';

const Home: NextPage = () => {
	return (
		<Page title='Dennis Pavlyuk' description='Full-Stack Developer'>
			<div className={styles.overlay}></div>
			<Header />
			<Main />
			<Footer />
		</Page>
	);
};

export default Home;
