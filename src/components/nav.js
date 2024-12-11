import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { CartContext } from "./addcard";




const Nav = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu
  const [opendrop, setOpendrop] = useState(false); // State for dropdown
  const { count } = useContext(CartContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setOpendrop((prev) => !prev);

  const Navigate = useNavigate();
  const location = useLocation();
  const ishomepage = location.pathname === "/";

  const handleNavigate = (path) => {
    Navigate(path);
    setOpendrop(false); // Close dropdown after navigating
  };

  return (
    <>
    <nav className="custom-navbar">
      
      <img
          src="/images/RAMLOGO.webp"
          alt="RAMLOGO"
          className="logo-images"
        />
        
        {opendrop && (
            <ul className="dropdown-menu">
              <li onClick={() => handleNavigate("/popular")} className="dropdown-item">
                Popular
              </li>
              <li onClick={() => handleNavigate("/toprate")} className="dropdown-item">
                Top-Rated
              </li>
              <li onClick={() => handleNavigate("/playing")} className="dropdown-item">
                Now-Playing
              </li>
              <li onClick={() => handleNavigate("/upcoming")} className="dropdown-item">
                Upcoming
              </li>
            </ul>
          )}
     
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/userboard" className="nav-link">Dashboard</Link>
          </li>
          
        </ul>
      </div>

      <i onClick={toggleDropdown} className="nav-drop fa-solid fa-caret-down fs-3"></i>
      
      {/* <div className="navbar-extras">
        <div className="search-bar">
          <input
            type="search"
            value={search}
            placeholder="Search Movies..."
            disabled={!ishomepage}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
           </div> 
        */}
        <Link to="/viewdata" className="cart-link">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-badge">{count}</span>
        </Link>
   

      
      <button onClick={toggleMenu} className="menu-toggle" type="button">
        <i id="navicon" className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
    </>
  );
};

export default Nav;
