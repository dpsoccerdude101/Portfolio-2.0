import './styles/globals.sass';
import './styles/anims.css';
import 'remixicon/fonts/remixicon.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import Gooey from './components/animations/Gooey';

const App = () => (
    <div
        style={{
            display: 'inline-block',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
        }}
    >
        <div style={{ zIndex: '-10' }}>
            <Gooey total={6} />
        </div>
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;
