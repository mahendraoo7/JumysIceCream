import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Product from '../Pages/Product'
import Blog from '../Pages/Blog'
import Page from '../Pages/Page'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from '../Component/Navbar'

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
                path:"/page",
                element:<Page/>
            },

        ]
    }
])


const HeaderRaoutes = () => {
  return (
    <div>
       <RouterProvider router={RouterPlat}>

       </RouterProvider>
    </div>
  )
}

export default HeaderRaoutes
