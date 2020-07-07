import React from 'react'
import SignUpImg from './signup-image.jpg'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
export default function SignUp(params) {
	return (<>
		<NavBar />
		<Sign/>
		<br/><br/><br/><br/>
		<hr/>
		<Footer />
	</>
	)
};


function Sign(){
	return(<>
		<div style={{ marginTop: '7%' }} className="container">
			<div className="row d-flex text-center align-items-center">
				<div className="col-12 col-md-6">
					<div className="m-5">
						<p className="h1 text-center" style={{ fontWeight: "bold" }}>Sign Up</p><br />

						<i className="fa fa-user"></i>
						<input type="text" className="form_control" placeholder="Your name" /><br /><br />


						<i className="fa fa-envelope"></i>
						<input type="text" className="form_control" placeholder="Email" /><br /><br />

						<label>
							<i className="fa fa-lock"></i>
						</label>
						<input type="password" className="form_control" placeholder="Password" /><br /><br />


						<label>
							<i className="fa fa-lock"></i>
						</label>
						<input type="password" className="form_control" placeholder="Repeat your Password" /><br /><br /><br />

						<div className="d-flex justify-content-between">
							<span>
								<input type="checkbox" className="mr-3" />Remember</span>
							<span><Link to="/login" style={{ textDecoration: "underline" }}>*Already a member</Link></span>

						</div>

						<br />

						<div className="text-center">
							<p className="w-25 button_hover ">Register</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6">
					<img src={SignUpImg} className="img-fluid" />
				</div>
			</div>
		</div>

	
	</>)
}