import React from 'react'
export default function Footer(params) {
	return(<>
	<footer className="page-footer font-small">
  <div className="container text-center text-md-left">
    <div className="row d-flex justify-content-around">
      
      <div className="col-md-3 col-6">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Our Mission</a>
          </li>
          <li>
            <a href="#!">Our Team</a>
          </li>
          <li>
            <a href="#!">Our Partner</a>
          </li>
        </ul>
      </div>
      
      <div className="col-md-3 col-6">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Live Session</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Network</a>
          </li>
          <li>
            <a href="#!">Server</a>
          </li>
          <li>
            <a href="#!">Security</a>
          </li>
          <li>
            <a href="#!">Language</a>
          </li>
        </ul>
      </div>
      
      <hr className="clearfix w-100 d-md-none" />
      <div className="col-md-3 col-6">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Help &amp; Support</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">FAQ</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
          <li>
            <a href="#!">License Agreement</a>
          </li>
        </ul>
      </div>
      
      <div className="col-md-3 col-6">
      <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>
        <a href="#">
          <i className="fa fa-facebook fa-2x text-primary mr-3"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter fa-2x text-info mr-3"></i>
        </a>
        <a href="#">
          <i className="fa fa-youtube fa-2x text-danger mr-3"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 ASG Techsolutions. All Rights Reserved
  </div>
</footer>

	</>)
};
