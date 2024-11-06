import { useContext } from "react";
import { Link } from "react-router-dom";
 import { CartContext } from "./addcard";



function Nav(){

  const {count}=useContext(CartContext)
    return(
        <>
    
          <nav className="navbar navbar-expand-sm navbar-dark bg-secondary position-sticky top-0 z-1">
            <a className="navbar-brand text-danger ms-2">Movies</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-3">
                <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link"> 
                     About Us
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                     Contact Us
                  </Link>
          
                </li>
              </ul>
            </div>
            <div className="px-5 me-auto">
              <span>
              <i class="fa-solid fa-magnifying-glass text-white mx-2"></i>
              </span>
              <span>
              <Link to="/login">
                <i class="fa-solid fa-user-plus text-info mx-2"></i>
              </Link>
              </span>
              <span>
              <Link to="/viewdata">
                   <i class="fa-solid fa-bag-shopping text-warning mx-2">
                    {count}
                    </i>
              </Link>
              </span>
            </div>
          </nav>
        
  
        </>
    )
}

export default Nav;