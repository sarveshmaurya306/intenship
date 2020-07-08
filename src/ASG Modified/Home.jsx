import React from 'react'
import NavBar from './NavBar';
import web from './undraw_Hello_qnas.svg'
import '../App.css'
import Images from './img1.jpg'
import Images2 from './img2.jpg'
import Footer from './Footer'
import {Link} from 'react-router-dom'
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
					<Link className="my-3 button_hover" to="/login/signup">Register Here</Link>
				</div>
				<div className="col-lg-6 order-sm-1 order-md-2 d-flex align-items-center" >
					<img src={web} id="side_img" className="justify-content-center align-items-center img-fluid" width="500" height="500" />
				</div>
			</div>
		</div>
	</div>)
}

function Flashes(props) {	
	return (
		<div>
			<div className="mb-3 card" style={{ width: '16rem' }}>
				<div className="row">
					<img src={props.img} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.index}.{props.title}</h5>
						<p className="card-text text-center">{props.description}</p>
						<a href={props.link} className="float-right btn button_hover" style={{marginRight:"20px"}}>Learn More</a>
					</div>
				</div>
			</div>

		</div>
	)
}

function FlashCards(props) {

	const [course, setCourse] = React.useState([])
	React.useEffect(() => {
		fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=PLQTrsL3aYSRHBtn_RIRu-5V1vydSgcUAm&key=AIzaSyCoa3yhaiNPBbfZidp_kEm4fWg3wR3w84w").then(res => res.json()).then(data => setCourse(data.items)).catch((err)=>console.log(err))
	}, [])


	return (<div>
		<div id="CoursesControl" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">

					<div className="d-flex flex-wrap justify-content-around">
						{course.slice(0,4).map((item,index)=>
						<Flashes title="Cisco ASA Firewall | Hindi" img={item.snippet.thumbnails.medium.url} description={item.snippet.title} index={index+1} link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=PLQTrsL3aYSRHGM6WNPDQGEStzZFJU7ITG&index=2&t=0s`}/>)}
					</div>

				</div>
				<div className="carousel-item">
					<div className="d-flex flex-wrap justify-content-around">
					{course.slice(4,8).map((item,index)=>
						<Flashes title="Cisco ASA Firewall | Hindi" img={item.snippet.thumbnails.medium.url} index={index+5} description={item.snippet.title} link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=PLQTrsL3aYSRHGM6WNPDQGEStzZFJU7ITG&index=2&t=0s`}/>)}
					</div>
				</div>

			</div>
			<a className="float-left carousel-control-prev next_pre_btn_according" href="#CoursesControl" role="button" style={{position: "relative"}} data-slide="prev">
				<span className="carousel-control-prev-icon text-primary"/>
				<span className="sr-only">Previous</span>
			</a>
			<a className="float-right carousel-control-next next_pre_btn_according" href="#CoursesControl" style={{position: "relative"}} role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>

	</div>)
}