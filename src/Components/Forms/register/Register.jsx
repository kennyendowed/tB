import React, {  useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import logo from "../../../assets/welcome/assets/img/logo.jpg";
import LoadingLogo from "../../LoadingLogo";
import axios from "axios";
import "./Register.css";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Terms from "../../../views/terms";
import aboutUs from "../../../assets/welcome/assets/img/about/trustbank-about-us.avif"
const INITIAL_FORM_STATE = {
        first_name: "",
        middle_name: "",
        address: "",
        dob: "",
        country:"",
        email:"",
        gender:"",
        last_name: "",
        Documentvid: null,
        Documentsignature: null,
        passportPhoto: null
  };
  const INITIAL_FORM_VALIDITY = {
    first_name: false,
    middle_name: true,
    address: false,
    dob: false,
    country: false,
    religion: true,
    email: false,
    gender: false,
    phone: true,
    last_name: false,
    Documentvid: false,
    Documentsignature: false,
    passportPhoto: false,
  };

function Register() {
    const API_URL2 = process.env.REACT_APP_BaseApi_URL;
    const navigate = useNavigate();
	//const { register, handleSubmit, formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
    const [showTerm, setShowTerm] = useState(false);
    const [formValidity, setFormValidity] = useState(INITIAL_FORM_VALIDITY);
	const [showPassword, setShowPassword] = useState(false);
	const [showLoader, setLoading] = useState(false);
    const [GetcountryInfo, setcountryInfo] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
     const [formDataToSend , setFormdata ] = useState(INITIAL_FORM_STATE)
    const fetchData = async() => {
       AuthService.GetCountryInfo().then((countryInfo) => {setcountryInfo(countryInfo);}).catch((error) =>{});
      }
      const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        const inputValue = type === 'file' ? event.target.files[0] : value;
        const isValid = event.target.value.length > 0;
        setFormdata({
          ...formDataToSend,
          [name]: inputValue
        });

      
        setFormValidity((prevValidity) => ({
          ...prevValidity,
          [name]: isValid,
        }));
      };
    
    //   const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    //   };

    //   const handleFileInputChange = (event) => {
    //     const { name, files } = event.target;
    //     setFormData({ ...formData, [name]: files[0] });
    //   };
    useEffect(() => {
      
        fetchData();
       // fetchResult();
      }, []);

    const handleClose = () => {
        setShowTerm(false);
      };

     // console.log(passportfile)
     const onFileSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
             // Object.keys(formData).forEach(key => {
            //     formDataToSend.append(key, formData[key]);            
            //   });
             for (const key in formDataToSend) {
                formData.append(key, formDataToSend[key]);            
              }
              
              formData.append("phone", phoneNumber);              
              formData.append("religion", "NULL");
            //   for (let key = 0; key < formDataToSend.length; key++) {
            //      formDataToSend.append(key, formData[key]);                
            //   }
            //   formDataToSend.append("first_name", formDataToSend.first_name);
            //   formDataToSend.append("middle_name", formDataToSend.middle_name);
            //   formDataToSend.append("last_name", formDataToSend.last_name);
            //   formDataToSend.append("address", formDataToSend.address);
            //   formDataToSend.append("dob", formDataToSend.dob);
            //   formDataToSend.append("country", formDataToSend.country);
            //   formDataToSend.append("religion", formDataToSend.religion);
            //   formDataToSend.append("phone", formDataToSend.phone);
            //   formDataToSend.append("gender", formDataToSend.gender);
            //   formDataToSend.append("email", formDataToSend.email);
            //   formDataToSend.append("Documentvid", formDataToSend.Documentvid);
            //   formDataToSend.append("Documentsignature", formDataToSend.Documentsignature);
            //  formDataToSend.append("passportPhoto", formDataToSend.passportPhoto);
//               formDataToSend.append("test", "kkkkkkkk");
//  console.log(formDataToSend)
//  console.log(formData)
try {
    const response = await AuthService.CreateAccount(formData);
    if (response.data[0].code === 200) {
      const resMessage = response.data[0].message || response.message;
      const Msg = () => (
        <div>
          <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
          <p> {resMessage} </p>
        </div>
      );
      toast.success(Msg, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
}  catch (ex) {
   // console.log(ex.response.data.status)
    console.log(ex)
    //  console.log( ex.response.data.data[0].message )
    setLoading(false);
   // console.log(ex)
    // let exresMessage =
    //   ex.response?.data?.data[0]?.message ||
    //   ex.message ||
    //   ex.response?.data?.error?.message;
  
    switch (ex.code || ex.response?.data?.status) {
      case "ERR_NETWORK":
        case "ERR_BAD_RESPONSE":
        const Msg1 = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
            <p> {ex.response?.data?.error?.message} </p>2
            <p>{ ex.message }</p>
          </div>
        );
        toast.error(Msg1, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "FALSE":        
      case "ERR_BAD_REQUEST":
        const Msg2 = () => (
          <div>
            <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
            <p>  ❌ {ex.response.data.data[0].message}  ❌ </p>
            {/* <p>
              ❌ {exresMessage} {ex.response?.data?.error?.message} ❌
            </p> */}
          </div>
        );
        toast.error(Msg2, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      default:
        console.log(ex);
        break;
    } 
}

  


    // .then(
    //     (response) => {
    //         console.log(response.data[0]) 
    //         if(response.data[0].code === 200){
    // let resMessage= (response.data[0].message) ? response.data[0].message : response.message
    //             // console.log(response.data[0].data);
    //             // const data = response.data[0].data
    //             // console.log(data.manufacturedYear)
    //             // setItems(response.data);
    //             let Msg = () => (
    //                 <div>
    //                     <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //                     <p>  {resMessage} </p>
    //                 </div>
    //             )
    //             toast.success(Msg, {
    //                 position: "top-right",
    //                 autoClose: 10000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //             setLoading(false)
    //         }
            
    //     }  , 
    //         (ex) => {
    //             setLoading(false)
    //             console.log(ex)
    //             console.log(ex.code)
    //             let exresMessage= (ex.response.data.data[0].message) ? ex.response.data.data[0].message  : ex.message  ? ( ex.response.data.error.message) : ex.response.data.error.message 
             
    //             console.log(exresMessage) 
    //                 if (ex.code === "ERR_NETWORK" || ex.code ==="ERR_BAD_REQUEST") {
    //                     let Msg = () => (
    //                         <div>
    //                             <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //                             <p> {exresMessage} </p>
    //                         </div>
    //                     )
    //                     toast.error(Msg, {
    //                         position: "top-right",
    //                         autoClose: 10000,
    //                         hideProgressBar: false,
    //                         closeOnClick: true,
    //                         pauseOnHover: true,
    //                         draggable: true,
    //                         progress: undefined,
    //                     });
                       
    //                 }
    
    //                 if (ex.code ==="ERR_BAD_RESPONSE" || ex.response.data.status === "FALSE") {
    //                     // console.log(ex.response.data.data[0].message) 
    //                     let Msg = () => (
    //                         <div>
    //                             <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    //                             <p> {ex.message}  </p>
    //                             <p>❌ {exresMessage} {ex.response?.data?.error?.message }❌</p>
    //                         </div>
    //                     )
    //                     toast.error(Msg, {
    //                         position: "top-right",
    //                         autoClose: 10000,
    //                         hideProgressBar: false,
    //                         closeOnClick: true,
    //                         pauseOnHover: true,
    //                         draggable: true,
    //                         progress: undefined,
    //                     });
    //                 }
                 
                    
    //             }
                
    //         );

       
    // } catch (error) {
    
    // }
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
                            <form  onSubmit={onFileSubmit}>
                                {/* <form id="contactForm" onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    First Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="first_name" id="first_name" className="form-control"
                                                  value={formDataToSend.first_name}
                                                  onChange={handleInputChange}
                                                //    {...register('first_name', { required: "First name is required", maxLength: 80, })}
                                               placeholder="first Name" />
                                                {/* <div className="help-block with-errors">{errors.first_name?.message}</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Middle Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="middle_name" id="middle_name" className="form-control" 
                                                  value={formDataToSend.middle_name}
                                                  onChange={handleInputChange}
                                                //   {...register('middle_name')}
                                                // required data-error="Please enter your middle name"
                                                 placeholder="Middle Name" />
                                              {/* <div className="help-block with-errors">{errors.middle_name?.message}</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Last Name <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="text" name="last_name" id="last_name" className="form-control"   
                                                    value={formDataToSend.last_name}
                                                    onChange={handleInputChange}
                                                    //   {...register('last_name', { required: "Last name is required", maxLength: 80, })} 
                                                    placeholder="Last Name" />
                                                {/* <div className="help-block with-errors">{errors.last_name?.message}</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Gender <sup className="text-danger">*</sup>
                                                </label>
                                                <select className="form-control" name="gender"    onChange={handleInputChange}>
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
                                                <input type="date" name="dob" id="dob" className="form-control"    value={formDataToSend.dob}
                                                    onChange={handleInputChange}
                                                    // {...register('dob', { required: "Date Of Birth is required" })} 
                                                    />
                                                {/* <div className="help-block with-errors">{errors.dob?.message}</div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Email <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="email" name="email" id="email" className="form-control"    value={formDataToSend.email}
                                                    onChange={handleInputChange} 
                                                  //  {...register('email', { required: "Email is required", maxLength: 80, })} 
                                                    placeholder="Email" />
                                                {/* <div className="help-block with-errors">{errors.email?.message}</div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Phone number <sup className="text-danger">*</sup>
                                                </label>
                                                <PhoneInput
                                                    country={'us'}
                                                    value={formDataToSend.phone}
                                                    onChange={setPhoneNumber}
                                                  />
                                                {/* <input type="text" name="phone" id="phone"    value={formDataToSend.phone}
                                                    onChange={handleInputChange}
                                                    // {...register('phone', { required: "Phone Number is required", maxLength: 80, })} 
                                                    className="form-control" placeholder="Phone number" /> */}
                                                {/* <div className="help-block with-errors">{errors.phone?.message}</div> */}
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Country <sup className="text-danger">*</sup>
                                                </label>
                                                <select className="form-control"   name="country"   onChange={handleInputChange}>
                                                <option value="">-- Select Country --</option>
                                                {GetcountryInfo.data?.data.map((result,index) => {
                  // console.log(result)
              return <option key={result.name} value={result.name}> {result.name}</option>
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
                                                <input type="text" name="address" id="address"    value={formDataToSend.address}
                                                    onChange={handleInputChange}
                                                    // {...register('address', { required: "Address is required", maxLength: 80, })}
                                                     className="form-control" placeholder="  Current Address" />
                                                {/* <div className="help-block with-errors">{errors.address?.message}</div> */}
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                    Religion <sup className="text-danger">*</sup>
                                                </label>
                                                <select
                                                    className="form-control"
                                                    name="religion"
                                                    //   defaultValue={religion}
                                                    onChange={handleInputChange}
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
                                        </div> */}
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                            <label
                                                //className={religion != "" ? "" : "text-danger"}
                                                >
                                                      Valid Identification (PDF,JPEG, JPG, PNG) <sup className="text-danger">*</sup>
                                                </label>
                                                <input type="file" name="Documentvid" id="Documentvid"   onChange={handleInputChange} required data-error="Please enter your   valid Identification (PDF,JPEG, JPG, PNG) " className="form-control" placeholder=" valid Identification (PDF,JPEG, JPG, PNG) " />
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
                                                <input type="file" name="Documentsignature" id="Documentsignature" onChange={handleInputChange}  required data-error="Please enter your   Signature (PDF,JPEG, JPG, PNG) " className="form-control" placeholder=" Signature (PDF,JPEG, JPG, PNG) " />
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
                                                <input type="file" name="passportPhoto" id="passportPhoto" onChange={handleInputChange} required data-error="Please enter your" className="form-control" placeholder=" Passport Photo (JPEG, JPG, PNG) " />
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
                                        <button className="btn btn-gray-800 mt-2 animate-up-2" disabled={!Object.values(formValidity).every((valid) => valid)}  onClick={onFileSubmit} type="submit">{showLoader ? <LoadingLogo /> :"Create Account"}</button>
                                            {/* <button type="submit" className="btn btn-primary">Send Message</button> */}
                                            {/* {!showLoader ? 
		              ( */}
                     
                      {/* ) : (
disabled={!isDirty || !isValid}
                        <button
                          className="btn btn-primary"
                          disabled
                        >
							<LoadingLogo />
                        {/* <LoadingSpinner/>  
                        </button>
                      )
					  } */}
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