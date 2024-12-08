import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { CartContext } from "./addcard";


const Nav = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggle menu
  const { count } = useContext(CartContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-navbar">
    <div className="logo">
      <span className="logo-name">RAM </span>
</div>



      
      {/* Add a dynamic class for toggling the navbar links */}
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li>
            <Link to="/userboard" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/moviestamil" className="nav-link">TamilMovies</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-extras">
        <div className="search-bar">
          <input
            type="search"
            value={search}
            placeholder="Search Movies..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to="/viewdata" className="cart-link">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-badge">{count}</span>
        </Link>
      </div>
      <button onClick={toggleMenu} className="menu-toggle" type="button">
        <i id="navicon" className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
};

export default Nav;