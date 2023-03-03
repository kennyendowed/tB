import React from "react";
import "./Footer.css";
import { useNavigate, Link,useLocation } from "react-router-dom";
import logo2 from "../../../assets/welcome/assets/img/black-logo.png";

function Footer() {
  const currentyear = new Date().getFullYear();

	return (
    <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-footer-widget">
            <div className="logo">
                          <Link  className="black-logo" to={"/"} >
                              <img src={logo2} alt="logo" />
                              </Link>
    
                              <p>At TrustBank, our top priority is to provide our customers with the highest level of service and support. We are committed to offering innovative banking solutions that meet the diverse needs of our customers, from personal banking to business banking and everything in between</p>
            </div>
                          
            
          </div>
        </div>

        <div className="col-lg-2 col-sm-4 col-md-4">
          {/* <div className="single-footer-widget">
                          <h3>Company</h3>
                          
            <ul className="list">
              <li><a href="about.html">About Us</a></li>
              <li><a href="features-2.html">Services</a></li>
              <li><a href="features-1.html">Features</a></li>
              <li><a href="pricing.html">Our Pricing</a></li>
              <li><a href="blog-1.html">Latest News</a></li>
            </ul>
          </div> */}
        </div>

        <div className="col-lg-3 col-sm-6 col-md-6">
          <div className="single-footer-widget">
                          <h3>Support</h3>
                          
            <ul className="list">
           
              <li> <Link to={"/faq"}>     
              FAQ's  </Link> </li>
              <li> <Link to={"/contact"}>     
                                Contact Us  </Link> </li>
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
              <li><span>Banking Hours:</span>Mon - Fri: 9.00am to 5.00pm</li>
                          </ul>
          </div>
        </div>
      </div>

              <div className="copyright-area">
                  <p>Copyright @<script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear())</script> Trustbank is proudly 
Licensed by the  <a href="#" target="_blank"> Central Bank</a></p>
              </div>
          </div>
          
       
  </footer>




);
}

export default Footer;