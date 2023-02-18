import React from "react";
import "./about.css"
import Navbar from "../../Components/Layout/navbar";
import aboutUs from "../../assets/welcome/assets/img/about/trustbank-about-us.avif"


import { useNavigate, Link,useLocation } from "react-router-dom";


    const About = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <> 
  <Navbar />

  
  <div className="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>About Us</h2>
                    <p>The Trust Bank story</p>
                </div>
            </div>
        </div>

        <section className="about-area ptb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <h2>Easy, fee-free , safest banking for you.....</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>Every month they moved their money the old way – which wasted their time and money. So they invented a beautifully simple workaround that became a billion-dollar business.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutUs} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="ready-to-talk">
			<div className="container">
				<div className="ready-to-talk-content">
                    <h3>Ready to talk?</h3>
                    <p>Our team is here to answer your question about Trust Bank</p>
                    <Link to={"/contact"} className= 'btn btn-primary'>     
                    Contact Us      </Link> 
                    {/* <span><a href="#">Or, get started now with a free trial</a></span> */}
                </div>
			</div>
		</section>

        <section className="account-create-area">
            <div className="container">
                <div className="account-create-content">
                    <h2>Apply for an account in minutes</h2>
                    <p>Get your Trust Bank account today!</p>
                    <Link to={"/auth/register"} className="btn btn-primary">     
                    Get Your Trust Bank  Account  </Link> 
                </div>
            </div>
        </section>

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


export default About;