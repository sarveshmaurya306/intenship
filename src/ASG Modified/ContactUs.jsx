import React from 'react'
import emailjs from 'emailjs-com'
import NavBar from './NavBar'
import ContactSVG from './undraw_contact_us_15o2.svg'
import Footer from './Footer'
export default function ContactUs() {
	const [message, setMessage] = React.useState({ name: "", query: "", number: '', email: '' });
	function Message(event) {
		var name = event.target.name;
		var value = event.target.value;
		setMessage({ ...message, [name]: value })
	}
	function submited(event) {
		event.preventDefault();
		var template_params = {
			"name": message.name,
			"phone": message.number,
			"email": message.email,
			"query": message.query
		}

		var service_id = "default_service";
		var template_id = "asg_responce";
		console.log(template_params)
		emailjs.send(service_id, template_id, template_params, "user_wYw3y6VKI3DEn3nN6TVgr")
		alert("your responce is recorded.")
		setMessage({ name: "", query: "", number: '', email: '' })
		return false;
	};
	return (
		<>
			<div className="mb-5">
			<NavBar/>
			</div>
			<div className="container"><hr />
				<div className="row d-flex justify-content-around" style={{marginTop:"10%"}}>
					<div className="col-12 col-md-6 order-md-1 order-2">
						<h2 className="h2 mt-5 mt-md-0">Contact Us</h2>
						<h3>Address: </h3><p className="text_color_according">New Delhi</p>
						<h3>Email: </h3><p  className="text_color_according">support@asgtechsolutions.com</p>
						<h3>Phone: </h3><p className="text_color_according">9999999999</p>
					</div>
					<div className="col-12 col-md-6 order-md-2 order-1 mt-2">
						<img src={ContactSVG} className="img-fluid" width="600" height="600"/>
					</div>
				</div>
				<br />
				<h2 className="h2">Have a Coffee</h2><hr />
				<form id="myform" onSubmit={() => false} className="contact_form_class">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="col-12">
								<label id="name">Name: </label>
								<input type="text" className="form-control" name="name" placeholder="Name" onChange={Message} /><br />
							</div>
							<div className="col-12">
								<label id="email">Email:</label>
								<input type="email" name="email" className="form-control" onChange={Message} placeholder="Email@gmail.com" /><br />
							</div>
							<div className="col-12">
								<label id="phone">Phone:</label>
								<input type="number" className="form-control " name="number" placeholder="Your  Number" onChange={Message} /><br />
							</div>
						</div>
						<div className="col-12 col-md-6 my-3">
							<textarea name="query" id="messageField" cols="30" rows="10" className="form-control" placeholder="write your message here" onChange={Message} ></textarea>
						</div>
					</div>
					<br />
					<span style={{ position: 'relative', left: "50%", transform: "translate(-30%,0)" }} className="button_hover" type="submit" value="submit" onClick={submited}>send</span>
				</form>
				<h4>plese check</h4>
				{`name:	${message.name} phone: ${message.number} email: ${message.email}`}
			</div>
				<hr />
			<Footer/>

		</>
	)
}