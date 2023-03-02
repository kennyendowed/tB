import React from "react";
import "./about.css"
import logo2 from "../../assets/welcome/assets/img/black-logo.png";
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
                            <p>At TrustBank, our commitment is to provide our customers with exceptional financial services, innovative solutions, and personalized support that meets their unique needs. With a proud history of over 100 years, TrustBank has established itself as a trusted and reliable institution that has helped countless individuals, families, and businesses achieve their financial goals.</p>
                            <p>At TrustBank, we understand that trust is essential when it comes to managing your finances, and we are committed to providing you with the highest level of security and confidentiality. We use advanced encryption methods to protect your data, and we regularly monitor our systems to ensure that we are always up to date with the latest security protocols.</p>
                        <p>At TrustBank, we believe in building strong relationships with our customers and helping them to achieve their financial aspirations. We look forward to serving you and helping you to achieve financial success.</p>
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

	
   
        
        <div className="go-top"><i className="fas fa-arrow-up"></i></div>
        </>
    
      );
}


export default About;