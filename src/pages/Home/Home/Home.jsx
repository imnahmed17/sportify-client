import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportify | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <UpcomingEvents />
        </div>
    );
};

export default Home;