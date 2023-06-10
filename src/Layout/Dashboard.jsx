import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()

    // TODO: check users if they are admin or not.
    const isAdmin = true;

    return (
        <div className="drawer-mobile drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-[100vh] bg-[#44b066] ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/userhome'>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'>Add Item</NavLink></li>
                            <li><NavLink to='/dashboard/payment'>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/payment'>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'>All User</NavLink></li>
                        </> :
                        <>
                            <li><NavLink to='/dashboard/userhome'>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'>Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/payment'>Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'>My Cart <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink>

                            </li>
                            <li><NavLink to='/dashboard/review'>Add Review</NavLink></li>
                        </>
                    }

                    <li className="divider"></li>

                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/orders'>Shop</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>

            </div >
        </div >
    );
};

export default Dashboard;