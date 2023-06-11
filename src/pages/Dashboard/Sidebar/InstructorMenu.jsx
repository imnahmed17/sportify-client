import { NavLink } from 'react-router-dom';
import { MdAddToQueue } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const InstructorMenu = () => {
    return (
        <>
            <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-indigo-200 hover:text-gray-700 
                    ${isActive ? "bg-indigo-200 text-gray-700" : "text-gray-600"}`
                }
            >
                <MdAddToQueue className="w-5 h-5" />
                <span className="mx-4 font-medium">Add a Class</span>
            </NavLink>
            <NavLink
                to="/dashboard/my-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-indigo-200 hover:text-gray-700 
                    ${isActive ? "bg-indigo-200 text-gray-700" : "text-gray-600"}`
                }
            >
                <SiGoogleclassroom className="w-5 h-5" />
                <span className="mx-4 font-medium">My Classes</span>
            </NavLink>
        </>
    );
};

export default InstructorMenu;