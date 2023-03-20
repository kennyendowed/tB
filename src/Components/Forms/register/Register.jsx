import React, {  useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import logo from "../../../assets/welcome/assets/img/logo.jpg";
import LoadingLogo from "../../LoadingLogo";
import "./Register.css";
import Terms from "../../../views/terms";
import aboutUs from "../../../assets/welcome/assets/img/about/trustbank-about-us.avif"


function Register() {
    const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
    const [showTerm, setShowTerm] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showLoader, setisLoader] = useState(false);
    const [GetcountryInfo, setcountryInfo] = useState([]);

    const fetchData = async() => {
       AuthService.GetCountryInfo().then((countryInfo) => {setcountryInfo(countryInfo);
    console.log(GetcountryInfo.data.data)}).catch((error) =>{});
      }


    useEffect(() => {
      
        fetchData();
       // fetchResult();
      }, []);

    const handleClose = () => {
        setShowTerm(false);
      };
      const chnageSelect = (record) => {
        console.log(record)
        // if (record === "Decline") {
        //   setisCheck(true)
        //   setShouldHideState(false)
        //   setActionRequest(record)
        // }
        // else {
        //   setisCheck(true)
        //   setShouldHideState(true)
        //   setActionRequest(record)
        // }
    
      }
      const onSubmit =async (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		  try {
				setisLoader(true)	
		 AuthService.login(data.username, data.password).then(
		  (response) => {
			setisLoader(false)	
			navigate("/dashboard");
			// window.location.reload();
		  },
		  (ex) => {
			setisLoader(false)	
			 console.log(ex);
					let Msg = () => (
						<div>
							 <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
						<p> { ex?.response?.data?.data[0]?.message} </p> 
						</div>
					  )
					toast.error(Msg, {
						position: "top-right",
						autoClose: 10000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						});
				
			
		  }
		);
	  } catch (err) {
		 console.log(err);
	  }

	  };


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
                                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    First Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="fname" id="fname" className="form-control"
                                                   {...register('fname', { required: "First name is required", maxLength: 80, })}
                                               placeholder="first Name" />
                                                <div className="help-block with-errors">{errors.fname?.message}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Middle Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="mname" id="mname" className="form-control" 
                                                  {...register('mname', { required: "Middle name is required", maxLength: 80, })}
                                                // required data-error="Please enter your middle name"
                                                 placeholder="Middle Name" />
                                              <div className="help-block with-errors">{errors.mname?.message}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Last Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="lname" id="lname" className="form-control"     {...register('lname', { required: "Last name is required", maxLength: 80, })} placeholder="Last Name" />
                                                <div className="help-block with-errors">{errors.lname?.message}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Gender <sup className="text-danger">*</sup>
                                                </label>
                                                <select className="form-control" name="email">
                                                <option value="">-- Select Gender --</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Dirth Of Birth <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="date" name="dob" id="dob" className="form-control"  {...register('dob', { required: "Date Of Birth is required" })} />
                                                <div className="help-block with-errors">{errors.dob?.message}</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Email <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="email" name="email" id="email" className="form-control" {...register('email', { required: "Email is required", maxLength: 80, })} placeholder="Email" />
                                                <div className="help-block with-errors">{errors.email?.message}</div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Phone number <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="phone" id="phone" {...register('phone', { required: "Phone Number is required", maxLength: 80, })} className="form-control" placeholder="Phone number" />
                                                <div className="help-block with-errors">{errors.phone?.message}</div>
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
                                                    Country <sup className="text-danger">*</sup>
                                                </label>
                                                <select className="form-control"   name="country"
                  onChange={(e) => chnageSelect(e.target.value)}>
                                                <option value="">-- Select Country --</option>
                                                {GetcountryInfo.data.data.map((result,index) => {
                  // console.log(result)
              return <option key={result.name} value={result.name}> o	{result.name}</option>
                            } )
                       }
                                                    {/* <option value="male">Male</option>
                                                    <option value="female">Female</option> */}
                                                </select>
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
                                                <input type="text" name="address" id="address" {...register('address', { required: "Address is required", maxLength: 80, })} className="form-control" placeholder="  Current Address" />
                                                <div className="help-block with-errors">{errors.address?.message}</div>
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
                                                    <option value="Christianity">Christianity</option>
                                                    <option value="Islam">Islam</option>
                                                    <option value="Hindu">Hindu</option>
                                                    <option value="Others">Others</option>
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
                                            {/* <button type="submit" className="btn btn-primary">Send Message</button> */}
                                            {!showLoader ? 
		              (
                      <button type="submit" className="btn btn-primary"  disabled={!isDirty || !isValid}>Create Account</button>
                      ) : (

                        <button
                          className="btn btn-primary"
                          disabled
                        >
							<LoadingLogo />
                        {/* <LoadingSpinner/>  */}
                        </button>
                      )
					  }
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