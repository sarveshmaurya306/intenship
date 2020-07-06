import React from 'react'
import NavBar from './NavBar'
import LoginImg from './signin-image.jpg';
import {Link} from 'react-router-dom'
import Footer from './Footer'
export default function Login(params) {
	return (<>
		<NavBar />
		<div style={{ marginTop: '10%' }} className="container">
			<div className="row d-flex text-center align-items-center">
				<div className="col-12 col-md-6">
					<div className="m-5">
						<p className="h1 text-center" style={{ fontWeight: "bold" }}>Sign In</p><br/>

						<i className="fa fa-user"></i>
						<input type="text" className="form_control" placeholder="Username"/><br /><br/>

						<label>
							<i className="fa fa-unlock"></i>
						</label>
						<input type="password" className="form_control" placeholder="Password"/><br /><br /><br/>

						<div className="d-flex justify-content-between">
							<span>
							<input type="checkbox" className="mr-3"/>Remember</span>
							<span><Link to="/login/signup" style={{textDecoration:"underline"}}>*Sign up here</Link></span>
							
						</div>

						<br />
						
							<div className="text-center">
							<p className="w-25 button_hover ">Login</p>
							</div><br/><br/><br/>
					</div>
				</div>
				<div className="col-12 col-md-6">
					<img src={LoginImg} className="img-fluid" />
				</div>
			</div>
		</div>
		<hr/>
		<Footer/>
	</>)
};
