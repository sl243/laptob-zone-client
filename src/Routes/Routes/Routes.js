import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryProduct from "../../Pages/Categories/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/categoryProduct/:id',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
    }
])

export default router;