import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useSelectedClass from '../hooks/useSelectedClass';
import { FaBars, FaBookmark, FaChalkboard, FaChalkboardTeacher, FaCheckCircle, FaHome, FaMoneyCheck, FaShoppingCart, FaUsers } from 'react-icons/fa';
import Header from '../Shared/Header';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const Dashboard = () => {
    const [selectedClass] = useSelectedClass()
    const {user} = useContext(AuthContext);

    // TODO: check users if they are admin or not.
    const isAdmin = true;

    return (
        <div className="drawer-mobile drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5 md:m-16">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary hover:bg-[#44b066] bg-[#44b066] text-black text-2xl drawer-button lg:hidden"><FaBars /></label>
            </div>
            <div className="drawer-side">

                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 text-lg font-semibold w-80 h-[100vh] bg-[#44b066] ">
                    {/* Sidebar content here */}
                    {
                        user.role === 'admin' ? <>
                            <li><NavLink to='/dashboard/adminhome'><FaHome/> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageclass'><FaChalkboardTeacher/> Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers/> Manage Users</NavLink></li>
                        </> :
                            <>
                                {/* <span><img className='mt-10' src="../assets/logo.png" alt="" /></span> */}
                                <li><NavLink to='/dashboard/userhome'><FaHome /> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/myclasses'><FaBookmark />My Selected Classes</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/reservation'><FaCheckCircle /> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaMoneyCheck /> Payment History</NavLink></li>
                            </>
                    }
                    {/* } */}

                    <li className="divider"></li>

                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaChalkboardTeacher /> Instructor's</NavLink></li>
                    <li><NavLink to='/classes'><FaChalkboard /> Classe's</NavLink></li>
                </ul>

            </div >
        </div >
    );
};

export default Dashboard;