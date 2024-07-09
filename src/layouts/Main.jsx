import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
            offset: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <NavBar />
            <div className='max-w-screen-xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;