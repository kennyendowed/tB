import React, { useEffect, useState ,useContext} from "react";
import "./faq.css"
import Navbar from "../../Components/Layout/navbar";
import faqImg from "../../assets/welcome/assets/img/about/faq.jpg";


import { useNavigate, Link,useLocation } from "react-router-dom";


    const Faq = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOn, setIsOn] = useState(false);
    const [isOn3, setIsOn3] = useState(false);
    const [isOn4, setIsOn4] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const style = isOpen ? {   display: 'block' } : {   display: 'none' };
    const style1 = isOn ? {   display: 'block' } : {   display: 'none' };
    const style2 = isOn3 ? {   display: 'block' } : {   display: 'none' };
    const style3 = isOn4 ? {   display: 'block' } : {   display: 'none' };
    const dropdownNavState = () => {
        if (isOpen) {
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      };

      const dropdownNavState2 = () => {
        if (isOn) {
            setIsOn(false);
        } else {
            setIsOn(true);
           
        }
      };

      const dropdownNavState3 = () => {
        if (isOn3) {
            setIsOn3(false);
        } else {
            setIsOn3(true);
           
        }
      };
      const dropdownNavState4 = () => {
        if (isOn4) {
            setIsOn4(false);
        } else {
            setIsOn4(true);
           
        }
      };


    return (
        <> 
  <Navbar />

  
  <div className="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
               
                <h2>Frequently Asked Questions</h2>
                            <div className="bar"></div>
                            <p>Find answers to all your queries about our service</p>
                </div>
            </div>
        </div>

        <section className="faq-area ptb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="faq-content">
                           

                            <div className="faq-image">
                                <img src={faqImg} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="faq-accordion">
                            <ul className="accordion">
                                <li className="accordion-item">
                                    <a className={isOpen ? "accordion-title" : "accordion-title active"}  onClick={() => dropdownNavState()}  >
                                        <i className="fas fa-plus"></i>
                                        How can I access my account?
                                    </a>

                                    <p className="accordion-content show" style={style} >Click on 'Login'

Fill in your account username and password

Click on 'Enter'</p>
                                </li>
                                
                                <li className="accordion-item">
                                <a className={isOn ? "accordion-title" : "accordion-title active"}  onClick={() => dropdownNavState2()}  >
                                        <i className="fas fa-plus"></i>
                                        How can I create a new bank account?
                                    </a>

                                    <p className="accordion-content"  style={style1}>Click on 'Open an account'

Fill in your correct details and click on create account.

To get your account verified before using it by contacting our support team</p>
                                </li>
                                
                                <li className="accordion-item">
                                <a className={isOn3 ? "accordion-title" : "accordion-title active"}  onClick={() => dropdownNavState3()}  >
                                        <i className="fas fa-plus"></i>
                                        When will I receive my account statement?
                                    </a>

                                    <p className="accordion-content" style={style2}>There are several reasons why we might need to verify your bank account details, including:

to confirm that you have control/access to the bank account we are verifying
to ensure the security of your Payoneer account and minimize the risk of fraud and identity theft
as part of our commitment to our marketplace partners, to ensure that our payment ecosystem does not contain bad actors</p>
                                </li>
                                
                                <li className="accordion-item">
                                <a className={isOn4 ? "accordion-title" : "accordion-title active"}  onClick={() => dropdownNavState4()}  >
                                        <i className="fas fa-plus"></i>
                                        How safe/secure is our net banking a/c?
                                    </a>

                                    <p className="accordion-content" style={style3}>Our verification and cutting edge security system is designed to give maximum funds security.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="faq-contact">
                    <div className="section-title">
                        <h2>Do You Have Any Questions</h2>
                        <div className="bar"></div>
                        <p>Our team is here to answer your question about Trust Bank</p>
                    <Link to={"/contact"} className= 'btn btn-primary'>     
                    Contact Us      </Link> 
                    </div>

                  
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


export default Faq;