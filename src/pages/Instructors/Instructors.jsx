import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
// import { motion, useScroll } from "framer-motion";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import banner from '../../assets/banner/instructor-banner.png';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    // const { scrollYProgress } = useScroll();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors');
        return res.data;
    });
    
    return (
        <>
            {/* <motion.div 
                className="progress-bar" 
                style={{ 
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 10,
                    background: "blue",
                    transformOrigin: "0%" 
                }}
            /> */}
            <Helmet>
                <title>Sportify | Instructors</title>
            </Helmet>
            <div>
                <img src={banner} className='w-full h-44' alt="" />
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    instructors.map(instructor => <InstructorCard 
                        key={instructor._id} 
                        instructor={instructor} 
                    />)
                }
            </div>
        </>
    );
};

export default Instructors;