import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ClassCard from './ClassCard';
import banner from '../../assets/banner/class-banner.png';

const ClassesPage = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/approved');
        return res.data;
    });

    return (
        <>
            <Helmet>
                <title>Sportify | Classes</title>
            </Helmet>
            <div>
                <img src={banner} className='w-full h-44' alt="" />
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    classes.map(classData => <ClassCard 
                        key={classData._id} 
                        classData={classData} 
                    />)
                }
            </div>
        </>
    );
};

export default ClassesPage;