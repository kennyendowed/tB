import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import "./Register.css";
import Terms from "../../../views/terms";
import aboutUs from "../../../assets/welcome/assets/img/about/trustbank-about-us.avif"


function Register() {

    const [showTerm, setShowTerm] = useState(false);


    const handleClose = () => {
        setShowTerm(false);
      };

    // const navigate = useNavigate();
    // const { register, handleSubmit,   formState: { errors } } = useForm();
    // // const [username, setEmail] = useState("");
    // // const [password, setPassword] = useState("");
    // const onSubmit = (data) => {
    //     // console.log(data.email);
    // 	// console.log(data.username);
    // 	  try {
    // 	 AuthService.login(data.username, data.password).then(
    // 	  () => {
    // 		navigate("/dashboard");
    // 		window.location.reload();
    // 	  },
    // 	  (error) => {
    // 		const Msg = () => (
    // 			<div>
    // 				 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    // 			<p> { error.response.data.data[0].message} </p> 
    // 			</div>
    // 		  )
    // 		toast.error(Msg, {
    // 			position: "top-right",
    // 			autoClose: 10000,
    // 			hideProgressBar: false,
    // 			closeOnClick: true,
    // 			pauseOnHover: true,
    // 			draggable: true,
    // 			progress: undefined,
    // 			});
    // 		console.log(error.response.data.data[0].message);
    // 	  }
    // 	);
    //   } catch (err) {
    // 	console.log(err);
    //   }

    //   };


    return (
        <>

            <section className="contact-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <div className="bar"></div>
                        <p>Please provide all required information</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="contact-info">
                                <div className="about-image">
                                    <img src={aboutUs} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    First Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="fname" id="fname" className="form-control" required data-error="Please enter your first name" placeholder="first Name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Middle Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="mname" id="mname" className="form-control" required data-error="Please enter your middle name" placeholder="Middle Name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Last Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="lname" id="lname" className="form-control" required data-error="Please enter your last name" placeholder="Last Name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Email <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Phone number <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone number" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                     Current Address <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="address" id="address" required data-error="Please enter your current address" className="form-control" placeholder="  Current Address" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                      Valid Identification (PDF,JPEG, JPG, PNG) <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="file" name="vid" id="vid" required data-error="Please enter your   valid Identification (PDF,JPEG, JPG, PNG) " className="form-control" placeholder=" valid Identification (PDF,JPEG, JPG, PNG) " />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                      Signature (PDF,JPEG, JPG, PNG) <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="file" name="signature" id="signature" required data-error="Please enter your   Signature (PDF,JPEG, JPG, PNG) " className="form-control" placeholder=" Signature (PDF,JPEG, JPG, PNG) " />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                       Passport Photo (JPEG, JPG, PNG) <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="file" name="passportPhoto" id="passportPhoto" required data-error="Please enter your" className="form-control" placeholder=" Passport Photo (JPEG, JPG, PNG) " />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Religion <sup className="text-danger">*</sup>
                                                </label>
                                                <select
                                                    className="form-control"
                                                    id="exampleFormControlSelect2"
                                                    name="religion"
                                                    //   defaultValue={religion}
                                                    //   onChange={(e) => setReligion(e.currentTarget.value)}
                                                    required
                                                >
                                                    <option>Select your Religion</option>
                                                    <option value="1">Christianity</option>
                                                    <option value="2">Islam</option>
                                                    <option value="4">Hindu</option>
                                                    <option value="3">Others</option>
                                                </select>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <p>
                                                <input
                                                style={{ marginRight: "5px" }}
                                                type="checkbox"
                                                required={true}
                                                // checked={agreementCheckBox}
                                                // onChange={() => setAgreementCheckBox(!agreementCheckBox)}
                                                />
                                                I Agree to the
                                                <a
                                              
                                                onClick={() => setShowTerm(true)}
                                                style={{ color: "#efb331" }}
                                                >
                                                {" "}
                                                Terms & Conditions
                                                </a>
                                            </p>




                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Terms showTerm={showTerm} handleClose={handleClose} />
                </div>


            </section>



            {/* <form onSubmit={handleSubmit(onSubmit)}>
			  <label>Username</label>
					  <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
			  {...register('username', { required: "Username is required", maxLength: 80 })}
			  className="form-control"  aria-label="Email" aria-describedby="email-addon"
            />
          </div>
				  <label>Username</label>
					  <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
			  {...register('username', { required: "Username is required", maxLength: 80 })}
			  className="form-control"  aria-label="Email" aria-describedby="email-addon"
            />
          </div>
          <p>{errors.username?.message}</p>
		  <label>Password</label>
			<div className="mb-3">
            <input
              type="password"
              name="password"
			  className="form-control"  aria-label="Email" aria-describedby="email-addon"
              placeholder="Password"
			  {...register('password',{
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                // maxLength: {
                //   value: 10,
                //   message: "Password cannot exceed more than 10 characters",
                // },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
		  <div className="text-center">
						<button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
					  </div>
					  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
					<Link
						to="/auth"
						className="text-info text-gradient font-weight-bold">
						Sign in
					</Link>
                   
                  </p>
                </div>
      </form> */}
        </>



    );
}

export default Register