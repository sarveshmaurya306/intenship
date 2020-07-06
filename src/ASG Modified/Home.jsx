import React from 'react'
import NavBar from './NavBar';
import web from './undraw_Hello_qnas.svg'
import '../App.css'
import Images from './img1.jpg'
import Images2 from './img2.jpg'
import Footer from './Footer'
export default function Home(params) {
	return (<div>
		<NavBar />
		<br /><br /><br/>
		<Main />
		<br />
		<br /><br /><br /><br />
		<FlashCards />
		<br />
		<br/>
		<hr/>
		{/* <Review /> */}
		<Footer/>

	</div>)
};

function Review() {
	return (<div>
		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="row">

						<img src={Images} className="d-block w-50" alt="error" />
						<img src={Images2} className="d-block w-50" alt="error" />
					</div>
				</div>
				<div className="carousel-item">
					<div className="row">

						<img src={Images2} className="d-block w-50" alt="error" />
						<img src={Images} className="d-block w-50" alt="" />
					</div>
				</div>
				<div className="carousel-item">
					<div className="row">

						<img src="..." className="d-block w-50" alt="error" />
						<img src="..." className="d-block w-50" alt="error" />
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>

	</div>)
}

function Main() {
	return (<div>
		<div className="container-fluid" style={{ height: "auto" }}>
			<div className="row mt-5 align-items-center" >
				<div className="col-lg-6 mt-5 d-flex align-items-center flex-column order-sm-2 order-1">
					<h1>Welcome to </h1>
					<h1 style={{ color: "#0FAAE3" }}>ASG Tech Solutions </h1>
					<h2><strong>We Provide Our Best.</strong></h2>
					<a className="my-3 button_hover" href="#">Register Here</a>
				</div>
				<div className="col-lg-6 order-sm-1 order-md-2 d-flex align-items-center" >
					<img src={web} id="side_img" className="justify-content-center align-items-center img-fluid" width="500" height="500" />
				</div>
			</div>
		</div>
	</div>)
}
var count=0;
function Flashes(props) {
	count++;
	return (
		<div>
			<div className="mb-3 card" style={{ width: '18rem' }}>
				<div className="row">
					<img src={Images} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title{count}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="float-right btn button_hover">See More</a>
					</div>
				</div>
			</div>

		</div>
	)
}

function FlashCards(props) {
	return (<div>
		<div id="CoursesControl" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">

					<div className="d-flex flex-wrap justify-content-around">
						<Flashes />
						<Flashes />
						<Flashes />
						<Flashes />
					</div>

				</div>
				<div className="carousel-item">
					<div className="d-flex flex-wrap justify-content-around">
						<Flashes />
						<Flashes />
						<Flashes />
						<Flashes />
					</div>
				</div>

			</div>
			<a className="float-left carousel-control-prev bg-dark" href="#CoursesControl" role="button" style={{position: "relative"}} data-slide="prev">
				<span className="carousel-control-prev-icon text-primary"/>
				<span className="sr-only">Previous</span>
			</a>
			<a className="float-right carousel-control-next bg-dark" href="#CoursesControl" style={{position: "relative"}} role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>

	</div>)
}