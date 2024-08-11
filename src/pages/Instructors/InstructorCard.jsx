import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"
import useAxiosSecure from "../../hooks/useAxiosSecure";

const InstructorCard = ({ instructor }) => {
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorInfo = [] } = useQuery(['instructor-info', instructor.name], async () => {
        const res = await axiosSecure.get(`/instructor-stats/${instructor.name}`);
        return res.data;
    });

    return (
        <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 shadow-md">
            <figure>
                <img src={instructor.image} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.email}</p>
                <p>No. of class take: {instructorInfo[0]?.count || 0}</p>
                <span>Classes:</span>
                <p className="h-6">{instructorInfo[0]?.classes.join(', ')}</p>
            </div>
        </motion.div>
    );
};

export default InstructorCard;