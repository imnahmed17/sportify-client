import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
// import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import banner from '../../assets/banner/instructor-banner.png';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors');
        return res.data;
    });
    
    return (
        <div>
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
        </div>
    );
};

export default Instructors;