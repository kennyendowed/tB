import React from "react";
import { useNavigate ,Link} from "react-router-dom";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AuthService from "../../../core/services/auth.service";
import "./Register.css";
import logo from "../../../assets/img/logos/providus-logo.svg";

function Register() {
	const navigate = useNavigate();
	const { register, handleSubmit,   formState: { errors } } = useForm();
	// const [username, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const onSubmit = (data) => {
	    // console.log(data.email);
		// console.log(data.username);
		  try {
		 AuthService.login(data.username, data.password).then(
		  () => {
			navigate("/dashboard");
			window.location.reload();
		  },
		  (error) => {
			const Msg = () => (
				<div>
					 <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
				<p> { error.response.data.data[0].message} </p> 
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
			console.log(error.response.data.data[0].message);
		  }
		);
	  } catch (err) {
		console.log(err);
	  }

	  };
	//   console.log(errors);
  

	
	
	// const handleLogin = async (e) => {
	//   e.preventDefault();
	//   try {
	// 	await AuthService.login(username, password).then(
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
	// };

	return (
	<>
			  <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
	  </>
		
	
        
);
}

export default Register