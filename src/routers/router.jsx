import {
    createBrowserRouter,
    // eslint-disable-next-line no-unused-vars
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import About from "../componenets/About";
import Blog from "../componenets/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayouts from "../Dashboard/DashboardLayouts";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import Managebooks from "../Dashboard/Managebooks";
import Editbooks from "../Dashboard/Editbooks";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element:<Home/>
          
        },
        {
          path:"/shop",
          element:<Shop/>
        }, {
          path:"/about",
          element:<About/>
          
        }, {
          path:"/blog",
          element:<Blog/>
          
        }, {
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
          
        },
      
      
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayouts/>,
      children :[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        
        {
          path:"/admin/dashboard/manage",
          element:<Managebooks/>
        },
        {
          path:"/admin/dashboard/editbooks",
          element:<Editbooks/>,
          loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        },

      ]
    }
  ]);

  export default router;