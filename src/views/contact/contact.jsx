import React from "react";
import "./contact.css"
import Navbar from "../../Components/Layout/navbar";


import { useNavigate, Link,useLocation } from "react-router-dom";


    const Contact = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <> 
  <Navbar />

  
       

		<footer className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-footer-widget">
							<div className="logo">
								<a href="index.html" className="black-logo"><img src="assets/img/black-logo.png" alt="logo" /></a>
								<a href="index.html" className="white-logo"><img src="assets/img/logo.png" alt="logo" /></a>
                                <p>Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis.</p>
							</div>
                            
							<ul className="social-links">
								<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								<li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-footer-widget">
                            <h3>Company</h3>
                            
							<ul className="list">
								<li><a href="about.html">About Us</a></li>
								<li><a href="features-2.html">Services</a></li>
								<li><a href="features-1.html">Features</a></li>
								<li><a href="pricing.html">Our Pricing</a></li>
								<li><a href="blog-1.html">Latest News</a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-footer-widget">
                            <h3>Support</h3>
                            
							<ul className="list">
								<li><a href="faq.html">FAQ's</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms & Condition</a></li>
								<li><a href="#">Community</a></li>
								<li><a href="contact.html">Contact Us</a></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-footer-widget">
							<h3>Address</h3>
							
							<ul className="footer-contact-info">
								<li><span>Location:</span> 27 Division St, New York, NY 10002, USA</li>
								<li><span>Email:</span> <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#a8c0cdc4c4c7e8c4dddec1c7c686cbc7c5"><span className="__cf_email__" data-cfemail="f098959c9c9fb09c8586999f9ede939f9d">[email&#160;protected]</span></a></li>
								<li><span>Phone:</span> <a href="tel:+321984754">+ (321) 984 754</a></li>
								<li><span>Fax:</span> <a href="tel:+12129876543">+1-212-9876543</a></li>
                            </ul>
						</div>
					</div>
				</div>

                <div className="copyright-area">
                    <p>Copyright @<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> Luvion is proudly created by <a href="https://envytheme.com/" target="_blank"> EnvyTheme</a></p>
                </div>
            </div>
            
            <div className="map-image"><img src="assets/img/map.png" alt="map" /></div>
		</footer>
   
        
        <div className="go-top"><i className="fas fa-arrow-up"></i></div>
        </>
    
      );
}


export default Contact;