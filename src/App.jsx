
import Navbar from "./componets/Navbar";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './componets/styles/Navbar.css'
import Home from "./componets/home/Home";
import About from "./componets/about/About";
import Services from "./componets/services/Services";
import HowItWorks from "./componets/how-it-works/HowItWorks";
import ContactUs from "./componets/contact-us/ContactUs";
function App() {

  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:<Navbar/>,
        children:[
          {
            path:'',
            element:<Home/>,
          },{
            path:'about',
            element:<About/>
          },
          {
            path:'services',
            element:<Services/>
          },{
            path:'how-it-works',
            element:<HowItWorks/>
          },{
            path:'contact-us',
            element:<ContactUs/>
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
