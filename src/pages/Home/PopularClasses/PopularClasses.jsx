import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularCard from "./PopularCard";

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/popular');
        return res.data;
    });

    return (
        <section>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    classes.map(classData => <PopularCard 
                        key={classData._id} 
                        classData={classData} 
                    />)
                }
            </div>
        </section>
    );
};

export default PopularClasses;