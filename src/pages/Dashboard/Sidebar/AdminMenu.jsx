import { NavLink } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { SiGoogleclassroom } from "react-icons/si";

const AdminMenu = () => {
    return (
        <>
            <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 
                    ${isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"}`
                }
            >
                <SiGoogleclassroom className="w-5 h-5" />
                <span className="mx-4 font-medium">Manage Classes</span>
            </NavLink>
            <NavLink
                to="/dashboard/my-class"
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-2 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 
                    ${isActive ? "bg-gray-300 text-gray-700" : "text-gray-600"}`
                }
            >
                <FaUsers className="w-5 h-5" />
                <span className="mx-4 font-medium">Manage Users</span>
            </NavLink>
        </>
    );
};

export default AdminMenu;