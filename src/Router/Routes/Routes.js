import { FaThemeco } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Dashboard/AddService";
import DashboardMain from "../../Dashboard/DashboardMain";
import Main from "../../Layout/Main";
import Home from "../../sPages/Home/Home/Home";
import Servicedtails from "../../sPages/Home/Home/Services/Servicedtails";


import Services from "../../sPages/Home/Home/Services/Services";
import Login from "../../sPages/Login/Login";
import Register from "../../sPages/Login/Register";
import MyReview from "../../sPages/Review/MyReview";
import ServiceReview from "../../sPages/Review/ServiceReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/servicerdetails/:id',
                element: <Servicedtails></Servicedtails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReview',
                element: <MyReview></MyReview>,
            },
        ],



    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>
            },
            {
                path: '/dashboard/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
        ]
    }
    // {
    //     path:'/dashboard',
    //     element:
    // }
]);

export default router;