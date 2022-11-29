import { createBrowserRouter } from "react-router-dom";
import AllPhones from "../Componets/AllPhones/AllPhones";
import Main from "../Layout/Main";
import Blogs from "../Shared/Blogs/Blogs";
import Home from "../Shared/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'category',
                element:<AllPhones></AllPhones>,
                loader:()=>fetch(`http://localhost:5000/allPhones`)
            }
        ]
    }
]);
export default router;