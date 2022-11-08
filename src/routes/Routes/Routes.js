import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Form/Login";
import Register from "../../components/Form/Register";
import Home from "../../components/Home/Home/Home";
import AllServices from "../../components/sheared/AllServices/AllServices";
import Details from "../../components/sheared/Details/Details";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/home',
                element : <Home></Home>
            },
            {
                path: '/allServices',
                element : <AllServices></AllServices>
            },
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`),
                element : <Details></Details>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])