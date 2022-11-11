import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Dashboard/AddService";
import DashboardMain from "../../Dashboard/DashboardMain";
import Main from "../../Layout/Main";
import Home from "../../sPages/Home/Home/Home";
import Servicedtails from "../../sPages/Home/Home/Services/Servicedtails";


import Services from "../../sPages/Home/Home/Services/Services";
import Login from "../../sPages/Login/Login";
import Register from "../../sPages/Login/Register";
import ServiceReview from "../../sPages/Review/ServiceReview";

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
                element: <Servicedtails></Servicedtails>
            },
            {
                path: '/servicereview/:id',
                element: <ServiceReview></ServiceReview>,
            },
        ],



    },

    {
        path: '/dashboard',
        element: <DashboardMain></DashboardMain>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardMain></DashboardMain>
            },
            {
                path: '/dashboard/addservice',
                element: <AddService></AddService>
            },
        ]
    }
    // {
    //     path:'/dashboard',
    //     element:
    // }
]);

export default router;