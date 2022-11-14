import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log('cintext', user.email);

    const handleLogOut = () => {
        logOut()
            .then()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        {
            user?.email ? <>
                <li><Link to='/myReview'>My Reviews</Link></li>
                <li><span>{user?.email} <button onClick={handleLogOut}>Logout</button></span></li>
            </> : null
        }




    </>
    return (
        <div className="navbar h-20 mb-2 pt-12 p-10 bg-orange-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className="w-20 h-20 rounded-full" src={logo} alt='' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary">Book Now</button>
                <Link to={'/dashboard/addservice'}>
                    <button className='btn btn-orange'>Admin Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;