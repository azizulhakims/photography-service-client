import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardHeader = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-orange-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/dashboard/addservice'}>Add Service</Link></li>
                        <li><Link to={'/'}>Home</Link></li>


                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">CameraPro Dashboard</a>
                {user?.email && <span>{user.email} <button>Logout</button></span>}
                <a>Hello</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/dashboard/addservice'}>Add Service</Link></li>
                    <li><Link to={'/'}>Home</Link></li>



                </ul>
            </div>
            <div className="navbar-end">

                {user?.email && <span>{user.email} <button onClick={handleLogOut}>Logout</button></span>}
            </div>
        </div>
    );
};

export default DashboardHeader;