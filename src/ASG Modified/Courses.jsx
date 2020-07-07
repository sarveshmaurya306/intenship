import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer.jsx'


// https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=PLQTrsL3aYSRHBtn_RIRu-5V1vydSgcUAm&key=AIzaSyCoa3yhaiNPBbfZidp_kEm4fWg3wR3w84w


export default function Courses(params) {
	const [course, setCourse] = React.useState([])
	React.useEffect(() => {
		fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=PLQTrsL3aYSRHBtn_RIRu-5V1vydSgcUAm&key=AIzaSyCoa3yhaiNPBbfZidp_kEm4fWg3wR3w84w").then(res => res.json()).then(data => setCourse(data.items))
	}, [])
	console.log(course);

	return (<>
		<NavBar />
		<br /><br /><br /><br />
		<h2 className="text-center">Our Courses</h2>
		<div className="container">
			<div className="row">
				{course.map(item =>
					<div className="card m-5 col-3 d-flex justify-content-center" style={{width:"18rem"}}>
						<div className="col">
							<img src={item.snippet.thumbnails.medium.url} className="card-img-top img-fluid" alt="..." width="100"/>
							<div className="card-body">
								<h5 className="card-title">{item.snippet.channelTitle}</h5>
								<p className="card-text">{item.snippet.title}</p>
								<a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&list=PLQTrsL3aYSRHGM6WNPDQGEStzZFJU7ITG&index=2&t=0s`} className="float-right btn button_hover mb-3">See More</a>
							</div>
						</div>
					</div>)}
					<br />
			</div>
		</div>
		<hr/>
		<Footer />
	</>)
};
