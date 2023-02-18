import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import LoadingSpinner from "../../../Components/spinner";
import LoadingLogo from "../../LoadingLogo";
import "./Login.css";
// import background from "../../../assets/img/curved-images/curved6.jpg";
 import logo from "../../../assets/img/logos/providus-logo.svg";
import { display } from "@mui/system";


function Login() {
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors,isSubmitting, isDirty, isValid} } = useForm({ mode: "onChange" });
	const [showPassword, setShowPassword] = useState(false)
	const [showLoader, setisLoader] = useState(false)
	// const [username, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const handleClick =()=>{
	// 	setShowpassword(true);

	// }
	const onSubmit =async (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		  try {
			// return new Promise((resolve) => {
			// 		setTimeout(() => {
			//   resolve();	
			setisLoader(true)	
		 AuthService.login(data.username, data.password).then(
		  () => {
			setisLoader(false)	
			navigate("/dashboard");
			 window.location.reload();
		  },
		  (ex) => {
			setisLoader(false)	
			// console.log(ex);
		
				if (typeof  ex.response?.data?.data != 'string') {
				  for (let err in  ex.response?.data?.data) {
					// console.log(err);
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
				   // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
				  }
				}
			
			// console.log(ex.response.data.data[0].message);
		  }
		);
// 	}, 2000);
// });
	  } catch (err) {
		// console.log(err);
	  }

	  };
	


	return (
	<>
	
			  <form className = "form"onSubmit={handleSubmit(onSubmit)}>
				  <label>Username</label>
					  <div className="mb-3">
                          <input
						   className="form-control login_input"
                          type="text"
                          name="username"
                          placeholder="Username"
			              {...register('username', { required: "Username is required", maxLength: 80 })}
			              
						 aria-label="Email" 
						 aria-describedby="email-addon"
                         />
						  <p className="error-color">{errors.username?.message}</p>
                      </div>
                     {/* <p className="error-color">{errors.username?.message}</p> */}
		            <label>Password</label>
			        <div className="mb-3 relative password-field">
                       <input
                           type = {showPassword ? "text" : "password"}
                           name="password"
			                className=" form-control login_input"  aria-label="Email" aria-describedby="email-addon"
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
			<div className="icon-container" onClick={() => setShowPassword(shown => !shown)}>
				{showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
			</div>
          </div>
          <p className="error-color">{errors.password?.message}</p>
		  <div className="text-center">
		 
		  {!showLoader ? 
		              (
                      <button type="submit" className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0"  disabled={!isDirty || !isValid}>LOG IN</button>
                      ) : (

                        <button
                          className="btn-lg btn-primary bg-gradient-info border-0 w-100 login_button h-40 mt-4 mb-0"
                          disabled
                        >
							<LoadingLogo />
                        {/* <LoadingSpinner/>  */}
                        </button>
                      )
					  }
						
					  </div>
					
      </form>
	  </>
		

        
);
}

export default Login;