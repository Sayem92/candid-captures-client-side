import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import Blogs from "../../components/Blogs/Blogs";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Login from "../../components/Form/Login";
import Register from "../../components/Form/Register";
import Home from "../../components/Home/Home/Home";
import MyReviews from "../../components/MyReviews/MyReviews";
import MyReviewUpdate from "../../components/MyReviews/MyReviewUpdate";
import AllServices from "../../components/sheared/AllServices/AllServices";
import Details from "../../components/sheared/Details/Details";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-candid-captures.vercel.app/details/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addService',
                element: <PrivateRoutes> <AddService></AddService></PrivateRoutes>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/myReviewUpdate/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-candid-captures.vercel.app/myReviewUpdate/${params.id}`),
                element: <PrivateRoutes><MyReviewUpdate></MyReviewUpdate></PrivateRoutes>
            }
        ]
    }
])