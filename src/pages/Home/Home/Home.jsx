import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sportify | Home</title>
            </Helmet>
            <Banner />
            <PopularClasses />
        </div>
    );
};

export default Home;