import React from 'react'
import emailjs from 'emailjs-com'
import NavBar from './NavBar'
import ContactSVG from './undraw_Letter_re_8m03.svg'
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
				<NavBar />
			</div>
			<div className="container"><hr />
				<div className="row d-flex justify-content-around" style={{ marginTop: "6%" }}>
					<h2 className="mt-5 mt-md-0 text-center">Contact Us</h2><br/><br/><br/><br/>
					<div className="col-12 col-md-6 order-md-1 order-2 d-flex flex-column justify-content-center contaier">

						<span className="d-flex align-items-center"><i className="fa fa-address-book mr-3"></i><h4>Registered Address: </h4></span><p className="text_color_according px-5" style={{ textDecoration: "underline" }}>New Delhi</p>

						<br />
						<span className="d-flex align-items-center"><i className="fa fa-address-book mr-3"></i><h4>Correspondance Address: </h4></span><p className="text_color_according px-5" style={{ textDecoration: "underline" }}>New Delhi</p>

						<br />
						<span className="d-flex align-items-center"><i className="fa fa-envelope mr-3"></i><h4>Email: </h4></span><p className="text_color_according px-5" style={{ textDecoration: "underline" }}>support@asgtechsolutions.com</p>

						<br />
						<span className="d-flex align-items-center"><i className="fa fa-phone mr-3"></i><h4>Mobile: </h4></span><p className="text_color_according px-5" style={{ textDecoration: "underline" }}>999-999-9999</p>
					</div>
					<div className="container col-12 col-md-6 order-md-2 order-1 mt-2">
						<img src={ContactSVG} className="img-fluid" width="400" height="400" />
					</div>
				</div>
				<br />
				<h2 className="h2">Have a Coffee</h2><hr />
				<form id="myform" onSubmit={() => false} className="contact_form_class">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="col-12 p-4">
								<span><i className="fa fa-user "></i></span>
								<input type="text" className="form_control" name="name" placeholder="Name" onChange={Message} /><br />
							</div>
							<div className="col-12 p-4">
								<span><i className="fa fa-envelope "></i></span>
								<input type="email" name="email" className="form_control" onChange={Message} placeholder="Email@gmail.com" /><br />
							</div>
							<div className="col-12 p-4">
								<span><i className="fa fa-mobile fa-2x"></i></span>
								<input type="number" className="form_control " name="number" placeholder="Your  Number" onChange={Message} /><br />
							</div>
						</div>
						<div className="col-12 col-md-6 py-4 ">
							<div className="container d-flex justify-content-around">
								<i className="fa fa-comments flex-start "></i>
								<textarea name="query" id="messageField" cols="30" rows="9" className="form_control" placeholder="write your message here" onChange={Message} ></textarea>
							</div>
						</div>
					</div>
					<br />
					<span style={{ position: 'relative', left: "50%", transform: "translate(-30%,0)" }} className="button_hover" type="submit" value="submit" onClick={submited}>send</span>
				</form>
				<h4>plese check</h4>
				{`name:	${message.name} phone: ${message.number} email: ${message.email}`}
			</div>
			<hr />
			<Footer />

		</>
	)
}