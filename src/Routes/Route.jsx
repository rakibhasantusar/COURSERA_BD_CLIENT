import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../pages/courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login-details/Login/Login";
import Register from "../pages/Login-details/Register/Register";
import Blog from "../pages/other/Blog";
import ErrorPage from "../pages/other/ErrorPage";
import Faq from "../pages/other/Faq";
import CheckOut from "../pages/Shared/CheckOut";
import Course from "../pages/Shared/Course";
import CourseDetail from "../pages/Shared/CourseDetail";
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
                loader: () => fetch(`https://coursera-bd-server1.vercel.app/courses`)
            },
            {
                path: '/course/',
                element: <Course></Course>,
            },
            {
                path: '/coursesdetail/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://coursera-bd-server1.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://coursera-bd-server1.vercel.app/courses/${params.id}`)
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