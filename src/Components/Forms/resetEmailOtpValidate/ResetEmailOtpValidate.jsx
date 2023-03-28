import "./ResetEmailOtpValidate.css";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import LoadingLogo from  "../../LoadingLogo";
import logo from "../../../assets/welcome/assets/img/logo.jpg";





function ResetEmailOtpValidate() {
    const navigate = useNavigate();
	const { register, handleSubmit,   formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
	

    const onSubmit =async (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		  try {
            AuthService.reSendOtp(data.emailOrPhone).then(
                (result) => {
                    console.log(result[0].code)
if(result.code ===200){
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
   
        navigate("/auth/emailValidate");

}
        },
        (ex) => {
            if (typeof  ex.response.data.data != 'string') {
                for (let err in  ex.response.data.data) {
                  // console.log(err);
                  let Msg = () => (
                      <div>
                           <img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
                      <p> { ex.response.data.data[0].message} </p> 
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
        }
      );
        } catch (err) {
            console.log(err);
                        
            let Msg = () => (
              <div>
                 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
              <p> {  err.message} </p> 
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
    
          };

	return (
        <>
  <form className = "form"onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group mb-4">
                          <input
						   className="form-control login_input"
                          type="email"
                          name="emailOrPhone"
                          placeholder="Email"
			              {...register('emailOrPhone', { required: "Email is required", maxLength: 80 })}
			              
						 aria-label="Email" 
						 aria-describedby="email-addon"
                         />
						  <p className="error-color">{errors.emailOrPhone?.message}</p>
                      </div>                          
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
            <p className="mb-4 text-sm mx-auto">
              Request new otp ? 👉️
              <Link
                  to="/auth/reset-otp"
                    className="text-info text-gradient font-weight-bold">Click Me...</Link>
            </p>
          </div>
                <div className="text-center">
    {!isSubmitting ? 
                (
                <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0 "  disabled={!isDirty || !isValid}>Send Request</button> 
                ) : (

                  <button
                    className="btn bg-gradient-info w-100 mt-4 mb-0"
                    disabled
                  >
                  <LoadingLogo/> 
                  </button>
                )
                }

                                      
                 
                </div>
              
</form>

</>
);
}

export default ResetEmailOtpValidate