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
        <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                <img src={instructor.image} alt="Shoes" className="w-full rounded-xl" />
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor.name}</h2>
                <p>{instructor.email}</p>
                <p>No. of class take: {instructorInfo[0]?.count || 0}</p>
                <p>Class names: {instructorInfo[0]?.classes.join(', ')}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">See Classes</button>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorCard;