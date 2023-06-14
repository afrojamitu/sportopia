import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='flex items-cnter justify-center my-52'>
            <button className="px-3 py-1 rounded bg-gray-600 hover:opacity-70 font-bold text-lg text-white mt-5">Loading...</button>
        </div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;