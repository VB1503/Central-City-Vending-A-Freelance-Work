import  { useState } from 'react';
import { IoMenu,IoClose } from 'react-icons/io5';
import { Outlet, Link } from 'react-router-dom';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        <div className='Header'>
          <div className='logo-cont'>
              <img src="/icons/logo.png" alt="logo" />
          </div>
            {isMenuOpen ? (
              <IoClose className='menu-icon' onClick={toggleMenu} />
            ) : (
              <IoMenu className='menu-icon' onClick={toggleMenu} />
            )}
          <div className={`nav-cont ${isMenuOpen ? 'open' : ''}`}>
            <ul className='nav'>
                <li className='menu'><Link to={'/'}>Home</Link></li>
                <li className='menu'><Link to={'/about'}>About us</Link></li>
                <li className='menu'><Link to={'/services'}>Services</Link></li>
                <li className='menu'><Link to={'/how-it-works'}>How it Works</Link></li>
                <li className='menu'><Link to={'/contact-us'}>Contact us</Link></li>
            </ul>
            <div className='nav-butt-cont'>
                <button className='get-started-butt'>GET STARTED</button>
            </div>
          </div>
        </div>
          <Outlet />
      </>
    );
  }
  
  export default Navbar
