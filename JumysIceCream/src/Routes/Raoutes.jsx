import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Product from '../Pages/Product'
import Blog from '../Pages/Blog'
import Page from '../Pages/Page'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Faq2 from '../Pages/Faq-2'
import Page404 from '../Pages/page404'
import AboutUs from '../Pages/AboutUs'
import Contact from '../Pages/Contact'

const RouterPlat = createBrowserRouter([
    {
        path: '/',
        element:<Navbar/>,  
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/product",
                element:<Product/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/faq2",
                element:<Faq2/>
            },
            {
                path:"*",
                element:<Page404/>
            },
            {
                path:"page",
                element:<Page/>
            },
            {
                path:"page404",
                element:<Page404/>
            },
            {
                path:"about",
                element:<AboutUs/>
            },
            {
                path:"contact",
                element:<Contact/>
            }

        ]
    }
])


const Raoutes = () => {
  return (
    <div>
       <RouterProvider router={RouterPlat}>

       </RouterProvider>
    </div>
  )
}

export default Raoutes
