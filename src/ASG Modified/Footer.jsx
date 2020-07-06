import React from 'react'
export default function Footer(params) {
	return(<>
	<footer className="page-footer font-small indigo">
  {/* Footer Links */}
  <div className="container text-center text-md-left">
    {/* Grid row */}
    <div className="row">
      {/* Grid column */}
      <div className="col-md-3 mx-auto">
        {/* Links */}
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
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none" />
      {/* Grid column */}
      <div className="col-md-3 mx-auto">
        {/* Links */}
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
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none" />
      {/* Grid column */}
      <div className="col-md-3 mx-auto">
        {/* Links */}
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
      {/* Grid column */}
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none" />
      {/* Grid column */}
      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
        {/* Social buttons */}
        <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
        {/* Facebook */}
        <a type="button" className="btn-floating btn-fb">
          <i className="fa fa-facebook fa-2x text-primary mx-3" />
        </a>
        {/* Twitter */}
        <a type="button" className="btn-floating btn-tw ">
          <i className="fa fa-twitter fa-2x text-info mx-3" />
        </a>
        {/* Google +*/}
        <a type="button" className="btn-floating btn-gplus">
          <i className="fa fa-google-plus fa-2x text-danger mx-3" />
        </a>
        {/* Dribbble */}
        <a type="button" className="btn-floating btn-dribbble">
          <i className="fa fa-youtube fa-2x text-danger mx-3" />
        </a>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row */}
  </div>
  {/* Footer Links */}
  {/* Copyright */}
  <div className="footer-copyright text-center py-3">© 2020 ASG Techsolutions.All Rights Reserved
  </div>
  {/* Copyright */}
</footer>

	</>)
};
