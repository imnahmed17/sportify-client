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
import InstructorRoute from './InstructorRoute';
import Instructors from '../pages/Instructors/Instructors';
import ClassesPage from '../pages/ClassesPage/ClassesPage';
import Payment from '../pages/Dashboard/Payment/Payment';
import EnrolledClass from '../pages/Dashboard/EnrolledClass/EnrolledClass';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import MyClass from '../pages/Dashboard/MyClass/MyClass';
import DashHome from '../pages/Dashboard/DashHome/DashHome';

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
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <ClassesPage />
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
            // common
            {
                index: true,
                element: <DashHome />,
                loader: () => fetch('https://sportify-server.vercel.app/totalPayments')
            },
            // student 
            {
                path: 'selected-class',
                element: <SelectedClass />
            },
            {
                path: 'enrolled-class',
                element: <EnrolledClass />
            },
            {
                path: 'history',
                element: <PaymentHistory />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            // instructor 
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: 'my-class',
                element: <InstructorRoute><MyClass /></InstructorRoute>
            },
            // admin route
            {
                path: 'manage-class',
                element: <AdminRoute><ManageClass /></AdminRoute>
            },
            {
                path: 'manage-user',
                element: <AdminRoute><ManageUser /></AdminRoute>
            }
        ]
    }
]);