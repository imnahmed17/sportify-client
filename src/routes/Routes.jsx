import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import DashboardLayout from '../layouts/DashboardLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ManageUser from '../pages/Dashboard/ManageUser/ManageUser';
import ManageClass from '../pages/Dashboard/ManageClass/ManageClass';
import SelectedClass from '../pages/Dashboard/SelectedClass/SelectedClass';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AddClass from '../pages/Dashboard/AddClass/AddClass';

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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>, 
        children: [
            // student 
            {
                path: 'selected-class',
                element: <SelectedClass />
            },
            {
                path: 'enrolled-class'
            },
            // instructor 
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'my-class'
            },
            // admin 
            {
                path: 'manage-class',
                element: <AdminRoute><ManageClass /></AdminRoute>
            },
            {
                path: 'manage-user',
                element: <AdminRoute><ManageUser /></AdminRoute>
            },
        ]
    }
]);