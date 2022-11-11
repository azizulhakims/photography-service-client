import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardMain from '../Dashboard/DashboardMain';



const DashboardLayout = () => {
    return (
        <div>
            <DashboardMain></DashboardMain>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;