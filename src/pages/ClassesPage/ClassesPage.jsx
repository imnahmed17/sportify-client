import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { motion, useScroll } from 'framer-motion';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ClassCard from './ClassCard';
import banner from '../../assets/banner/class-banner.png';

const ClassesPage = () => {
    const [axiosSecure] = useAxiosSecure();
    const { scrollYProgress } = useScroll();

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
            <div className='mt-3 px-4 flex gap-3 font-medium'>
                <p>Home</p>
                <p className='text-gray-400'>/</p>
                <p>Classes</p>
            </div>
            <div className='mt-6 mb-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    classes.map(classData => <ClassCard 
                        key={classData._id} 
                        classData={classData} 
                    />)
                }
            </div>
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
                    transformOrigin: '0%' 
                }}
            />
        </>
    );
};

export default ClassesPage;