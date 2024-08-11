import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Fade } from 'react-awesome-reveal';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const InterestingFacts = () => {
    const [axiosSecure] = useAxiosSecure();
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    const { data: facts = [] } = useQuery(['facts'], async () => {
        const res = await axiosSecure.get('/facts');
        return res.data;
    });

    const handleNextFactClick = () => {
        setCurrentFactIndex((currentFactIndex + 1) % facts.length);
    };

    return (
        <section>
            <SectionTitle title="Interesting Facts" />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="bg-base-100 md:w-3/4 mx-auto rounded-lg shadow">
                    <div className="card-body">
                        {
                            facts.length > 0 ? <>
                                <Fade cascade>
                                    <p className="text-center">{facts[currentFactIndex]?.fact}</p>
                                </Fade>
                                <div className="card-actions justify-center">
                                    <button onClick={handleNextFactClick} className="btn btn-primary btn-sm mt-2">Next Fact</button>
                                </div>
                            </> : <p>Loading facts...</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InterestingFacts;