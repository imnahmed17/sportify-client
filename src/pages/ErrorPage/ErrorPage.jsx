import { Link, useRouteError } from "react-router-dom";
import errorJson from "../../assets/404-error.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex justify-center">
                <Lottie animationData={errorJson} loop={true} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-error me-4 mt-5'>{error?.message}</p>
                <Link to='/' className="mt-3">
                    <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">Back to homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;