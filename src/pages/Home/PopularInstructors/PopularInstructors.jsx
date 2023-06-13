import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PopularInsCard from './PopularInsCard';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors/popular');
        return res.data;
    });
    return (
        <section>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    instructors.map(people => <PopularInsCard 
                        key={people._id} 
                        people={people} 
                    />)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;