import { createBrowserRouter } from "react-router-dom";
import AllPhones from "../Componets/AllPhones/AllPhones";
import Login from "../FromeInfo/Login/Login";
import SignUp from "../FromeInfo/SignUp/SignUp";
import Main from "../Layout/Main";
import Blogs from "../Shared/Blogs/Blogs";
import CategoryPhone from "../Shared/Home/CategoryPhones/CategoryPhon/CategoryPhone";
import Home from "../Shared/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000/categoryPhones`)
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000/categoryPhones`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'categories/:id',
                element:<CategoryPhone></CategoryPhone>,
                loader:({params})=>fetch(`http://localhost:5000/allPhones/${params.id}`)
            },
            // {
            //     path:'category',
            //     element:<AllPhones></AllPhones>,
            //     loader:()=>fetch(`http://localhost:5000/allPhones`)
            // },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },

        ]
    }
]);
export default router;