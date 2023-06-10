import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;