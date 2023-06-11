import { Link, NavLink } from 'react-router-dom';
import { IoFlash } from 'react-icons/io5';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const navOptions = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/instructors" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Instructors
            </NavLink>
        </li>
        <li>
            <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Classes
            </NavLink>
        </li>
        {
            user ? (
                isAdmin ? (
                    <li>
                        <NavLink to="/dashboard/manage-class" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                            Dashboard
                        </NavLink>
                    </li>
                ) : (
                    isInstructor ? (
                        <li>
                            <NavLink to="/dashboard/add-class" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Dashboard
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/dashboard/selected-class" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Dashboard
                            </NavLink>
                        </li>
                    )
                    
                )
            ) : (
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Login
                    </NavLink>
                </li>
            )
        }
    </>

    return (
        <div className="navbar relative z-10 max-w-screen-xl bg-base-200 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="hover:bg-gray-100 btn btn-ghost normal-case text-2xl h-full">
                    <IoFlash style={{ color: '#00BFFF' }} className='' size={50} />
                    <p className="font-bold tracking-wide">Sportify</p>
                </Link>
            </div>
            <div className="navbar-end gap-2">
                <ul className="hidden lg:flex menu menu-horizontal px-1">
                    {navOptions}
                </ul>
                {
                    user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="avatar flex items-center">
                            <div className="w-11 rounded-full md:mr-3 hover:cursor-pointer">
                                <img src={user.photoURL} title={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link className="font-semibold" onClick={handleLogOut}>Logout</Link></li>
                        </ul>
                    </div> 
                }
            </div>
        </div>
    );
};

export default NavBar;