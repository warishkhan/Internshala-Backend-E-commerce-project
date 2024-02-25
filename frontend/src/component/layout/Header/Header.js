import React from "react";
import '../Header/Header.css'
import logo from '../../../images/WarTech.png'
import { Link } from 'react-router-dom'
import { logout } from "../../../actions/userAction";
import { useDispatch } from "react-redux";

const Header = ({user,search,setSearch}) => {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      
      <Link className="navbar-brand" to="/"><img src={logo} alt="WarTech-logo" className="img-fluid"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon hover active"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link to='/search' onClick={()=>setSearch("none")} className='text-decoration-none' style={{display:search}}>
        <form className="d-flex mt-2" role="search">
          <input className="form-control me-2 text-decoration-none" type="search" placeholder="Search" aria-label="Search"/>
          <input type="button" value="Search" className='text-decoration-none' />
        </form>
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-1">
            {user ?"": <li className="nav-item btn-top"><Link to="/login" className="text-decoration-none text-dark fw-bold p-2 login-btn">Login</Link></li>}
            <li className="nav-item mt-1"> 
              <Link className="nav-link text-white" to="/cart"> 
                 <i className="cart-custom cart fa fa-shopping-cart"></i> 
              </Link> 
           </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav className="container-fluid bg-light">
        <ul className="nav nav-pills d-flex justify-content-center align-items-center fw-bold">
          <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>setSearch("block")} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>setSearch("block")} to='/products'>All Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>setSearch("block")} to='/about'>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>setSearch("block")} to="/contact">Contact</Link>
          </li>
          
         {user ? 
          (<>
            <li className="nav-item">
            <Link className="nav-link text-dark" onClick={()=>setSearch("block")} to="/account">Profile</Link>
          </li>
         <li className="nav-item" onClick={()=>setSearch("block")}>
            <Link className="nav-link text-dark" to="/" onClick={logoutUser}>Logout</Link>
          </li>
          </>):""}
        </ul>
      </nav>
      
      </>
  )
}

export default Header