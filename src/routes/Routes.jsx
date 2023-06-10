import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import DashboardLayout from '../layouts/DashboardLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'instructors'
            },
            {
                path: 'classes'
            }
        ]
    },
    {
        path: 'login', 
        element: <Login />
    },
    {
        path: 'signup', 
        element: <SignUp />
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />, 
        children: [
            // student 
            {
                path: 'selected-class'
            },
            {
                path: 'enrolled-class'
            },
            // instructor 
            {
                path: 'add-class'
            },
            {
                path: 'my-class'
            },
            // admin 
        ]
    }
]);