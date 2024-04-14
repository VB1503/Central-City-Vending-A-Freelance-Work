
import Navbar from "./componets/Navbar";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Navbar.css'
import Home from "./componets/home/Home";
function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Navbar/>,
        children:[
          {
            path:'/',
            element:<Home/>,
          },{
            path:'/about',
          }
        ]
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router}/>
    
    </>
  );
}

export default App;
