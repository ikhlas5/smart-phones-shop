import { createBrowserRouter } from "react-router-dom";
import AllPhones from "../Componets/AllPhones/AllPhones";
import Login from "../FromeInfo/Login/Login";
import SignUp from "../FromeInfo/SignUp/SignUp";
import AllUsers from "../Layout/DashbordLayout/DashboardAll/AllUsers/AllUsers";
import ManageSeller from "../Layout/DashbordLayout/DashboardAll/MangeSeller/MangeSeller";
import Myorder from "../Layout/DashbordLayout/DashboardAll/Myorder";
import Dashbord from "../Layout/DashbordLayout/Dashbord";
import Main from "../Layout/Main";
import Blogs from "../Shared/Blogs/Blogs";
import AddProduct from "../Shared/Header/Header/AddProduct/AddProduct";
import CategoryPhone from "../Shared/Home/CategoryPhones/CategoryPhon/CategoryPhone";
import Home from "../Shared/Home/Home";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivatRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`https://smart-phones-shop-server.vercel.app/categoryPhones`)
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch(`https://smart-phones-shop-server.vercel.app/categoryPhones`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'categories/:id',
                element:<CategoryPhone></CategoryPhone>,
                loader:({params})=>fetch(`https://smart-phones-shop-server.vercel.app/allPhones/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            // {
            //     path:'/addProduct',
            //     element:<AddProduct></AddProduct>
            // }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashbord></Dashbord></PrivateRoutes>,
        children:[
            {
                path:'/dashboard/myorder',
                element:<Myorder></Myorder>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/mangeSeller',
                element:<ManageSeller></ManageSeller>
            },

        ]
    }
]);
export default router;