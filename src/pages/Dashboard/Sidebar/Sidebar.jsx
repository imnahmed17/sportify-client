import { useContext, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { IoFlash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GrLogout } from 'react-icons/gr';
import CommonMenu from './CommonMenu';
import AdminMenu from './AdminMenu';
import InstructorMenu from './InstructorMenu';
import StudentMenu from './StudentMenu';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isActive, setActive] = useState('false');
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleLogOut = () => {
        logOut() 
            .then(() => { })
            .catch(error => console.log(error));
    };

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link className="hover:bg-gray-100 btn btn-ghost normal-case text-2xl h-full">
                            <IoFlash style={{ color: '#00BFFF' }} size={35} />
                            <p className="font-bold tracking-wide">Sportify</p>
                        </Link>
                    </div>
                </div>
                <button onClick={handleToggle} className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-indigo-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}>
                <div>
                    {/* Branding & Profile Info */}
                    <div>
                        <div className='w-full hidden md:flex py-2 justify-center items-center bg-indigo-200 mx-auto'>
                            <Link to="/" className="hover:bg-transparent btn btn-ghost normal-case text-2xl h-full">
                                <IoFlash className='text-indigo-600' size={40} />
                                <p className="font-bold tracking-wide text-indigo-600">Sportify</p>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>
                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {
                                isAdmin ? (
                                    <AdminMenu />
                                ) : (
                                    isInstructor ? (
                                        <InstructorMenu />
                                    ) : (
                                        <StudentMenu />
                                    )
                                )
                            }
                            <div className="divider"></div>
                            <CommonMenu />
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                    <button onClick={handleLogOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-indigo-200 hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;