import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import AllServices from "../../components/sheared/AllServices/AllServices";
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
        ]
    }
])