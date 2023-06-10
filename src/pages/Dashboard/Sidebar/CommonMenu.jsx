import { NavLink } from "react-router-dom";
import { FaHome, FaChalkboardTeacher } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const CommonMenu = () => {
    return (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 
                    ${isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"}`
                }
            >
                <FaHome className="w-5 h-5" />
                <span className="mx-4 font-medium">Home</span>
            </NavLink>
            <NavLink
                to="/instructors"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 
                    ${isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"}`
                }
            >
                <FaChalkboardTeacher className="w-5 h-5" />
                <span className="mx-4 font-medium">Instructors</span>
            </NavLink>
            <NavLink
                to="/classes"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 
                    ${isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"}`
                }
            >
                <RiComputerLine className="w-5 h-5" />
                <span className="mx-4 font-medium">Classes</span>
            </NavLink>
        </>
    );
};

export default CommonMenu;