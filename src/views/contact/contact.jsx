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

  <div className="page-title-area item-bg2 jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>Contact Us</h2>
                    <p>Drop us message for any query</p>
                </div>
            </div>
        </div>
       
        <div className="currency-transfer-provider-with-background-color">
       
            <div className="ctp-contact-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="ctp-contact-form">
                                <h3>Get In Touch With Us</h3>

                                <form id="contactForm">
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Sergio Laughlin" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Surname</label>
                                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your surname" placeholder="George" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="luvion@gmail.com" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Telephone</label>
                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="+ (321) 984 754" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Write message here" ></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Send Us Your Enquiry</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        

        </div>
	
        <div className="go-top"><i className="fas fa-arrow-up"></i></div>
        </>
    
      );
}


export default Contact;