import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../Pages/Dashboard/Student/MyClass/MyClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructors',
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'allusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'enrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>
      }
    ]
  }
]);

export default router;