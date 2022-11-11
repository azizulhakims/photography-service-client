import React from 'react';
import AddService from './AddService';
import DashboardHeader from './DashboardHeader';

const DashboardMain = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <AddService></AddService>
        </div>
    );
};

export default DashboardMain;