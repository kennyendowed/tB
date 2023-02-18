import {Outlet} from 'react-router-dom'
import logo from "../assets/img/logos/providus-logo.svg";
import background from "../assets/img/curved-images/curved6.jpg";
import Footer from './Layout/footer';


const  AuthenticationContent=() =>{
  return (   
<div className="page-header min-vh-100">
  <div className="container">
     <div className="row">
       <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
         <div className="card card-plain mt-8">
          <div className="card-header pb-0 text-left bg-transparent">
            <img src={logo} className="toaster-brand-img h-100" alt=" main_logo" />
                <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                  <p className="mb-0">Enter your username and password to sign in</p>
           </div>
            <div className="card-body">
                <Outlet/>
            </div>
			      </div>
			  </div>

			     <div className="col-md-6">
			       	<div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
				      <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${background})` }}></div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
  )
	
}

export default AuthenticationContent;