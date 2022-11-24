import { createBrowserRouter} from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryProduct from "../../Pages/Categories/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/categoryProduct/:id',
                element: <CategoryProduct></CategoryProduct>
            }
        ]
    }
])

export default router;