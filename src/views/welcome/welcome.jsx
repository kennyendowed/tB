import React from "react";
import "./welcome.css"
import img2 from "../../assets/welcome/assets/img/banner-image/banner-bg.jpg";
import Navbar from "../../Components/Layout/navbar";


import { useNavigate, Link,useLocation } from "react-router-dom";


    const Welcome = (props) => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <> 
  
  <Navbar />
  
        <div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <h1>Easy, fee-free banking for entrepreneurs</h1>
                            <p>Get the financial tools and insights to build, you are the reason we are in business,Exceptional service delivery is our flagship.</p>
                            <Link to={"/auth/register"} className="btn btn-primary">Get Started </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="featured-boxes-area">
            <div className="container">
                <div className="featured-boxes-inner">
                    <div className="row m-0">
                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-fb7756">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>

                                <h3>TrustBank account</h3>
                                <p>Enjoy all the benefits of a personalized TrustBank account, an annual interest of 1% per annum.</p>

                                <Link to={"/auth/register"} className="read-more-btn">Open An Account</Link> 
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-facd60">
                                    <i className="flaticon-data-encryption"></i>
                                </div>

                                <h3>Full credit report</h3>
                                <p>Know your credit history across financial institutions and be notified of issues you may be having</p>

                               <Link to={"/auth/register"} className="read-more-btn">Open An Account</Link> 
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon color-1ac0c6">
                                    <i className="flaticon-wallet"></i>
                                </div>

                                <h3>Instant Cashout</h3>
                                <p>Apply 24/7 and get funds in your TrustBank account instantly.</p>

                               <Link to={"/auth/register"} className="read-more-btn">Open An Account</Link> 
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                            <div className="single-featured-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>

                                <h3>Safe and Secure</h3>
                                <p>We provide our customers with a high level of security and confidence that their information is protected from unauthorized access or theft</p>

                               <Link to={"/auth/register"} className="read-more-btn">Open An Account</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
   
  
        <section className="services-area ptb-70 bg-f7fafd">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    <div className="overview-image">
                        <div className="image">
                            <img src={img2} alt="image" />

                            <div className="circle-img">
                                <img src={img2} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-content">
                        <div className="content">
                            <h2>Small- to medium-sized businesses</h2>
                            <div className="bar"></div>
                            <p>At TrustBank, you can access your accounts and manage your finances from anywhere, anytime. Our friendly and knowledgeable staff are always available to assist you with any questions or concerns you may have, and we are dedicated to providing a seamless and hassle-free banking experience.</p>

                            <ul className="services-list">
                                <li><span><i className="flaticon-check-mark"></i> Easy transfers</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Deposit checks instantly</span></li>
                                <li><span><i className="flaticon-check-mark"></i> A powerful open API</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Coverage around the world</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Business without borders</span></li>
                                <li><span><i className="flaticon-check-mark"></i> Affiliates and partnerships</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        <section className="features-area ptb-70 bg-f6f4f8">
            <div className="container">
                <div className="section-title">
                    <h2>Our Features</h2>
                    <div className="bar"></div>
                    <p></p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>

                            <h3>Incredible infrastructure</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-f78acb">
                                <i className="flaticon-envelope-of-white-paper"></i>
                            </div>

                            <h3>Email notifications</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-cdf1d8">
                                <i className="flaticon-menu"></i>
                            </div>

                            <h3>Simple dashboard</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-c679e3">
                                <i className="flaticon-info"></i>
                            </div>

                            <h3>Information retrieval</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon bg-eb6b3d">
                                <i className="flaticon-cursor"></i>
                            </div>

                            <h3>Drag and drop functionality</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-features-box">
                            <div className="icon">
                                <i className="flaticon-alarm"></i>
                            </div>

                            <h3>Deadline reminders</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
     
		<section className="funfacts-area ptb-70 pt-0">
			<div className="container">
				<div className="section-title">
					<h2>We always try to understand customers expectation</h2>
					<div className="bar"></div>
					<p>We are also committed to giving back to the communities we serve. Our philanthropic initiatives and volunteer efforts support a variety of local causes and organizations, and we are proud to be a responsible corporate citizen.

Thank you for choosing TrustBank as your trusted banking partner. We look forward to serving you and helping you achieve your financial goals</p>
				</div>

				

				<div className="contact-cta-box">
					<h3>Have any question about us?</h3>
					<p>Don't hesitate to contact us</p>
                    <Link to={"/contact"} className= 'btn btn-primary'>     
                    Contact Us      </Link>
				</div>

				
			</div>
		</section>
  
    
		
   

		
        
        <div className="go-top"><i className="fas fa-arrow-up"></i></div>
        </>
    
      );
}


export default Welcome;