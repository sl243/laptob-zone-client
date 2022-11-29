import { createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import CategoryProduct from "../../Pages/Categories/CategoryProduct";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Payment from "../../Pages/Payment/Payment";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/categoryProduct/:id',
            //     element: <CategoryProduct></CategoryProduct>,
            //     loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            // },
            {
                path: '/categoryProduct/:categoryName',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.categoryName}`)
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/buy/${params.id}`)
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;