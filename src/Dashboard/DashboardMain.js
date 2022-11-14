import React from 'react';
import useTitle from '../hooks/useTitle';
import AddService from './AddService';
import DashboardHeader from './DashboardHeader';

const DashboardMain = () => {
    useTitle('Dashboard')
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <AddService></AddService>
        </div>
    );
};

export default DashboardMain;