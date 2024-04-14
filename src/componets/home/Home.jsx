import "./Home.css";
import AboutUs from "./AboutUs";
import HowItWorks from "./HowItWorks";
import Carousel from "./Carousel";
import Services from "./Services";
import Reviews from "./Reviews";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
     <div className="home-container">
      <img src='/images/homeBg.png' className="home-bg" alt="" />
      <div className="content-container">

          <div className="left-content">
            <div className='left-hero'>
            <div className="title">
              BAKERSFIELD MOST REPUTABLE VENDING MACHINE PARTNER
            </div>
            <div className="subtitles">
              <span>Free</span> installation and service.<br/>No upfront payments or cost.
            </div>
            <div className="buttons-container">
              <button className="button">REVIEWS</button>
              <button className="get-started-butt">GET STARTED</button>
            </div>
            </div>
          </div>
          <div className="right-content">
            <div className='form-card'>
            <div className="r-subtitles">
              GET SMART VENDING SERVICES INSTALLED AT <span style={{color:"#0e57c4"}}>NO COST</span> TO
              YOUR ORGANIZATION
            </div>
            <hr className="border-blue-700 border" />
            <div className="form-container">
              <input
                type="text"
                className="input-field"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="input-field"
                placeholder="Company"
              />
              <button className="submit-button">GET STARTED</button>
            </div>
            </div>
          </div>
        </div>
      </div>
   
      <div  className="about-box" >
        <AboutUs />
      </div>
      <div >
        <HowItWorks />
      </div>
      <div className="carousel" >
        <Carousel />
      </div>
      <div className="pt-[80px]" >
        <Services />
      </div>
      <Reviews />
      <div className="pt-[80px]" >
        <WhyChooseUs />
      </div>

    <Footer/>
    </>
   

  );
}
