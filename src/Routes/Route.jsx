import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../pages/courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login-details/Login/Login";
import Register from "../pages/Login-details/Register/Register";
import Blog from "../pages/other/Blog";
import ErrorPage from "../pages/other/ErrorPage";
import Faq from "../pages/other/Faq";
import Course from "../pages/Shared/Course";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])