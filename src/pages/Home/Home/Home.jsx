import { Helmet } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Testimonial from '../Testimonial/Testimonial';
import InterestingFacts from '../InterestingFacts/InterestingFacts';
import Partners from '../Partners/Partners';
import University from '../University/University';

const Home = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Helmet>
                <title>Sportify | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <University />
            <PopularInstructors />
            <UpcomingEvents />
            <InterestingFacts />
            <Testimonial />
            <Partners />
            <motion.div 
                className='progress-bar' 
                style={{ 
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 5,
                    background: 'blue',
                    transformOrigin: '0%',
                    zIndex: 20 
                }}
            />
        </>
    );
};

export default Home;