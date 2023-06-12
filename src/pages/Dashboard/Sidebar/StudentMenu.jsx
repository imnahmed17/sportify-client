import { NavLink } from 'react-router-dom';
import { AiOutlineFileDone } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";

const StudentMenu = () => {
    return (
        <>
            <NavLink
                to="/dashboard/selected-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-indigo-200 hover:text-gray-700 
                    ${isActive ? "bg-indigo-200 text-gray-700" : "text-gray-600"}`
                }
            >
                <AiOutlineFileDone className="w-5 h-5" />
                <span className="mx-4 font-medium">My Selected Classes</span>
            </NavLink>
            <NavLink
                to="/dashboard/enrolled-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-indigo-200 hover:text-gray-700 
                    ${isActive ? "bg-indigo-200 text-gray-700" : "text-gray-600"}`
                }
            >
                <SiGoogleclassroom className="w-5 h-5" />
                <span className="mx-4 font-medium">My Enrolled Classes</span>
            </NavLink>
            <NavLink
                to="/dashboard/history"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-indigo-200 hover:text-gray-700 
                    ${isActive ? "bg-indigo-200 text-gray-700" : "text-gray-600"}`
                }
            >
                <FaMoneyCheckAlt className="w-5 h-5" />
                <span className="mx-4 font-medium">Payment History</span>
            </NavLink>
        </>
    );
};

export default StudentMenu;