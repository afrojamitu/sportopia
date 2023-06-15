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
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import EnrolledStudent from "../Pages/Dashboard/Instructor/EnrolledStudent/EnrolledStudent";
import AddClass from "../Pages/Dashboard/Instructor/MyClass/AddClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import Update from "../Pages/Dashboard/Instructor/MyClass/Update";

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
        path: 'payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://sportopia-server.vercel.app/payment/${params.id}`)
      },
      {
        path: 'allusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'enrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: 'myclass',
        element: <MyClass></MyClass>
      },
      {
        path: 'enrolledstudent',
        element: <EnrolledStudent></EnrolledStudent>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'classes/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://sportopia-server.vercel.app/classes/${params.id}`)
      },
      {
        path: 'manageclass',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      }
    ]
  }
]);

export default router;