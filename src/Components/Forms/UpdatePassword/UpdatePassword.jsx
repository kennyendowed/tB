import React, { useEffect, useState, createContext, useMemo } from "react";
import "./UpdatePassword.css";
import LoadingLogo from "../../../Components/LoadingLogo";
import aboutUs from "../../../assets/welcome/assets/img/about/trustbank-about-us.avif"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import logo from "../../../assets/welcome/assets/img/logo.jpg";
import ResetEmailOtpValidate from "../../../Components/Forms/resetEmailOtpValidate";



const UpdatePassword = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [showLoader, setisLoader] = useState(false);
  const [showTerm, setShowTerm] = useState(false);







  const onSubmit = async (data) => {

    try {
      // return new Promise((resolve) => {
      // 		setTimeout(() => {
      //   resolve();	
      setisLoader(true)
      AuthService.chnangePassword(data).then(
        (result) => {
          setisLoader(false)
if(result.status ==="TRUE"){
const Msg = () => (
<div>
   <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
<p> { result.data[0].message} </p> 
</div>
)
toast.success(Msg, {
position: "top-right",
autoClose: 10000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});

// navigate("/auth/emailValidate");

}
         
          navigate("/auth");
          // window.location.reload();
        },
        (ex) => {
          setisLoader(false)
          //console.log(ex);
          if (ex?.response?.data.type === "firstLogin") {
            navigate("/auth/chnangePassword");
          }
          if (typeof ex.response?.data?.data != 'string') {
            for (let err in ex.response?.data?.data) {
              console.log(err);
              let Msg = () => (
                <div>
                  <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
                  <p> {ex?.response?.data?.data[0]?.message} </p>
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
              // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
            }
          }

          // console.log(ex.response.data.data[0].message);
        }
      );
      // 	}, 2000);
      // });
    } catch (err) {
      console.log(err);
    }

  };
  const handleClose = () => {
    setShowTerm(false);
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



                <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label >OTP</label>
                    <input
                      type="text"
                      name="token"
                      className=" form-control login_input" aria-label="Email" aria-describedby="email-addon"
                      placeholder="Password token"
                      {...register('token', {
                        required: "token is required",
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
                  <div className="mb-3">
                    <label >New password</label>
                    <div className="mb-3 relative password-field">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className=" form-control login_input" aria-label="Email" aria-describedby="email-addon"
                        placeholder="Password"
                        {...register('password', {
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
                      <div className="icon-container" onClick={() => setShowPassword(shown => !shown)}>
                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                      </div>
                    </div>
                    <p className="error-color">{errors.password?.message}</p>
                  </div>
                  <div className="mb-3">
                    <label >Verify password</label>
                    <div className="mb-3 relative password-field">
                      <input
                        type={showPassword2 ? "text" : "password"}
                        name="password_confirmation"
                        className=" form-control login_input" aria-label="Email" aria-describedby="email-addon"
                        placeholder="Verify Password"
                        {...register('password_confirmation', {
                          required: "Password confirmation is required",
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
                      <div className="icon-container" onClick={() => setShowPassword2(shown => !shown)}>
                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    {!showLoader ?
                      (
                        <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid}>Submit</button> // disabled={!isDirty || !isValid}
                      ) : (

                        <button
                          className="btn btn-primary"
                          disabled
                        >
                          <LoadingLogo />

                        </button>
                      )
                    }

                    <div className="clearfix"></div>
                  </div>
                  <p>
                       <a

                        onClick={() => setShowTerm(true)}
                        style={{ color: "#efb331" }}
                      >
                        {" "}
                Request Otp Via Email
                      </a>
                    </p>
                </form>
              </div>
            </div>
          </div>

          <ResetEmailOtpValidate showTerm={showTerm} handleClose={handleClose} />

        </div>


      </section>


    </>
  );
}


export default UpdatePassword