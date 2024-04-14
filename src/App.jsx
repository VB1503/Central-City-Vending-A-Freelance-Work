import AboutUs from "./componets/AboutUs";
import Carousel from "./componets/Carousel";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import HowItWorks from "./componets/HowItWorks";
import Reviews from "./componets/Reviews";
import Services from "./componets/Services";
import WhyChooseUs from "./componets/WhyChooseUs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './Navbar.css'
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const howRef = useRef(null);
  const carouselRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUs = useRef(null);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
      
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
      <div ref={homeRef} className="">
        <Home />
      </div>
      <div ref={aboutRef} className="about-box" >
        <AboutUs />
      </div>
      <div ref={howRef}>
        <HowItWorks />
      </div>
      <div className="carousel" ref={carouselRef}>
        <Carousel />
      </div>
      <div className="pt-[80px]" ref={servicesRef}>
        <Services />
      </div>
      <Reviews />
      <div className="pt-[80px]" ref={contactUs}>
        <WhyChooseUs />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col w-1/3 text-gray-400 gap-3">
            <hr className="border-2 border-gray-400"/>
            <div className="flex justify-evenly">
                <div className="cursor-pointer" onClick={()=>homeRef.current?.scrollIntoView({ behavior: "smooth" })}>Home</div>
                <div className="cursor-pointer" onClick={()=>aboutRef.current?.scrollIntoView({ behavior: "smooth" })}>About Us</div>
                <div className="cursor-pointer"  onClick={()=>howRef.current?.scrollIntoView({ behavior: "smooth" })}>How it Works</div>
                <div className="cursor-pointer" onClick={()=>contactUs.current?.scrollIntoView({ behavior: "smooth" })}>Contact</div>
                <div className="cursor-pointer" >FAQs</div>
            </div> 
            <div className="flex justify-evenly">
            <div className="">&copy; CENTRAL CITY VENDING</div>  
            <div className="">Privacy and Security Policy</div>  
            </div>   
            <div className="flex justify-center gap-4 text-[30px] pb-5">
                <FaSquareXTwitter />
                <FaFacebookF />
                <FaYoutube />
            </div>
        </div>
      
    </div>
    </>
  );
}

export default App;
