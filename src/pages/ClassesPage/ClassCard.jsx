import { motion } from "framer-motion"
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const ClassCard = ({ classData }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={classData.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ml-2">
                <h2 className="card-title">Class Name: {classData.className}</h2>
                <p>
                    Instructor Name: {classData.instructorName} <br />
                    Available Seats: {classData.availableSeats} <br />
                    Price: {classData.price}
                </p>
                <div className="card-actions">
                    <button className="btn btn-primary" disabled={isAdmin || isInstructor}>Select Class</button>
                </div>
            </div>
        </motion.div>
    );
};

export default ClassCard;