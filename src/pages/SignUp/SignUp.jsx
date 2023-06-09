import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner10 } from 'react-icons/im';
import { AuthContext } from '../../providers/AuthProvider';
import { saveUser } from '../../api/auth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { loading, createUser, updateUserProfile, googleSignIn, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const saveAddress = localStorage.getItem('address') || '/';
    const from = location.state?.from?.pathname || saveAddress;
    localStorage.setItem('address', from);

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            toast.error('Password did not match');
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        saveUser(result.user);
                        toast.success("User Created!");
                        reset();
                        logOut();
                    })
                    .catch((err) => {
                        console.log(err.message);
                        toast.error(err.message);
                    });
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                saveUser(result.user);
                toast.success("Welcome Back!");
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Sportify | Sign Up</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-400">Welcome to Sportify</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" {...register("name", { required: true })} name="name" id="name" placeholder="Enter Your Name Here" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" data-temp-mail-org="0" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm">Photo URL:</label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" id="photoURL" placeholder="Enter Your Photo URL Here" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" data-temp-mail-org="0" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" {...register("email", { required: true })} name="email" id="email" placeholder="Enter Your Email Here" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" data-temp-mail-org="0" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                <input type={show ? "text" : "password"} {...register("password", { 
                                    required: true, 
                                    minLength: 6, 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ 
                                })} name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must contain one Uppercase and one special character.</p>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm mb-2">Confirm Password</label>
                                <input type={show ? "text" : "password"} {...register("confirmPassword", { 
                                    required: true, 
                                    minLength: 6, 
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ 
                                })} name="confirmPassword" id="confirmPassword" placeholder="******" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900" />
                                <Link className="mt-1 flex justify-end text-sm hover:underline hover:text-indigo-500 text-gray-600" onClick={() => setShow(!show)}>
                                    {
                                        show ? <span>Hide Password</span>: <span>Show Password</span>
                                    }
                                </Link>
                                {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600">Password must contain one Uppercase and one special character.</p>}
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="bg-indigo-500 w-full rounded-md py-3 text-white">
                                {loading ? <ImSpinner10 className="m-auto animate-spin" size={24} /> : "Sign Up"} 
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Signup with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div onClick={handleGoogleSignIn} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 hover:border-indigo-500 border-rounded cursor-pointer">
                        <FcGoogle size={32} />
                        <p>Continue with Google</p>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="hover:underline hover:text-indigo-500 text-gray-600">
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUp;