import React from 'react'
import web from './ASG_Correct_Logo-removebg-preview.png'
import {NavLink} from 'react-router-dom'
export default function NavBar(props) {
	return(<div>
	<nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5" style={{backgroundColor:"rgba(255, 255, 255, 0.637)",backdropFilter:" blur(5px)"}}>
  <div className="container-fluid">
  <img src={web} width="100" width="100" className="img-fluid" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{alignItems:"center"}}>
        <li className="nav-item">
          <NavLink className="nav-link" exact aria-current="page" activeClassName="currentPage" to="/">Home</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Popular Courses
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item"  exact activeClassName="currentPage" to="/courses/webdevelopment">Web Development</NavLink></li>
            <li><NavLink className="dropdown-item" exact activeClassName="currentPage" to="/courses/machinelearning">Machine Learning</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" exact activeClassName="currentPage" to="/courses/java">Java</NavLink></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link"  exact aria-current="page" activeClassName="currentPage" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  exact aria-current="page" activeClassName="currentPage" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  exact aria-current="page" activeClassName="currentPage" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" activeClassName="currentPage" to='/login'><strong style={{color:"0FAAE3"}}>In/Out</strong></NavLink>
        </li>  
      </ul> 
    </div>
  </div>
</nav>

	</div>)
};
