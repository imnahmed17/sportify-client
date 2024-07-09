import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularCard from "./PopularCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/popular');
        return res.data;
    });

    return (
        <section>
            <SectionTitle title='Popular Classes' />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
                <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3'>
                    {
                        classes.map((classData, index) => <PopularCard 
                            key={classData._id} 
                            classData={classData} 
                            aosDelay={index * 200}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularClasses;