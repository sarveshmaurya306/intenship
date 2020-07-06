import React from 'react'
import web from '../HOME.svg'
export default function Home(params) {
	return (<div>
		<section id="header" className="d-flex align-item-center">
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
								<h1>Grow your bussiness with <strong className="brand-name"> Sarvesh Technical </strong></h1>
								<h2 className='my-3'>
									we are the team of talented developer making websites.
						</h2>
								<div className="mt-3">
									<a href="#" className="btn-get-started">Get Started</a>
								</div>
							</div>
							<div className="col-lg-6 order-1 order-lg-2 header-img">
								<img src={web} className="img-fluid animated" alt="error" />
							</div>
						</div>
					</div>
				</div>
				</div>
		</section>
	</div>)
};
