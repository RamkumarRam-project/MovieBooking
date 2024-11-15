import { useContext,  } from "react";
import { Link, } from "react-router-dom";
import { CartContext } from "./addcard";



function Nav({search,setSearch}){
  
  

  
  const {count}=useContext(CartContext)
  
   
    return(
        <>
    
          <nav className="navbar navbar-expand-md navbar-dark bg-secondary  bg-gradient position-sticky top-0 z-1">
           <h2 className="namedesign">Ram</h2>
            <button
              className="navbar-toggler nav-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-3">
                <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
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
                <li className="nav-item">
                   <Link to="/login" className="nav-link text-info">
                     <i style={{color:"#28D146"}} className="fa-solid fa-user-plus mx-2"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center px-5 me-auto">
        
          
       
            <div className="input">
              <input type="search"  value={search} placeholder="Search Movies..." onChange={(e) => setSearch(e.target.value)}/>
      
              </div>
       
        <Link to="/viewdata" className="nav-link position-relative">
        <i class="fa-solid fa-cart-shopping nav-shop "></i>
         
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
            </span>
         
        </Link>
      </div>
          </nav>
        
  





    
        </>
    )
  }

export default Nav;