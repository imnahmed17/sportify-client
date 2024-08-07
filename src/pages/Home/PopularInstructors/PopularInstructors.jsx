import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PopularInsCard from './PopularInsCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors/popular');
        return res.data;
    });
    
    return (
        <section>
            <SectionTitle title='Popular Instructors' />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2'>
                <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4'>
                    {
                        instructors.slice(0, 4).map((people, index) => <PopularInsCard 
                            key={people._id} 
                            people={people} 
                            aosDelay={index * 200}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularInstructors;