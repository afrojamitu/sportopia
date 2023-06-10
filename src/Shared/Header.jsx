import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/Authprovider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Classe's</Link></li>
        <li><Link to='/instructors'>Instructor's</Link></li>
        <li><Link>Dashboard</Link></li>
    </>

    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .then(error => console.log(error))
    }

    return (
        <div className='shadow-md bg-base-100 w-full fixed z-10 bg-opacity-60'>
            <div className='md:mx-20'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        <Link to='/'><img className='w-20' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-3 font-semibold text-lg">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        { 
                        user ? < >
                        <h1 className="text-xl font-semibold text-green-700 px-4">{user?.displayName}</h1>
                        <button onClick={handleLogout} className="px-3 py-1 rounded bg-green-700 hover:opacity-70 font-bold text-lg text-white" style={{transition: '.5s'}}>LogOut</button>
                        </> :
                            <Link to='/login' className="px-3 py-1 rounded bg-green-700 hover:opacity-70 font-bold text-lg text-white" style={{transition: '.5s'}}>Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;