import React , { useState } from "react";
import "./AddFunds.css";
import dashboardService from "../../../core/services/dashboard.service";
import logo from "../../../assets/welcome/assets/img/logo.jpg";
import { ToastContainer, toast } from 'react-toastify';
import PulseLoader from "react-spinners/PulseLoader";
import Swal from "sweetalert2";



    const AddFunds = (props) => {
		const [ requestStatus , setRequestStatus ] = useState("")
		const [amount , setAmount] = useState("")
		const [ requestType , setRequestType ] = useState("")
		const [narration , setNarration] = useState('')
		const [date , setDate ] = useState("")
		const [ isLoading , setIsLoading] = useState("")
		const [accountNumber , setAccountNumber] = useState("")


    const addfunds = (e) =>{
		e.preventDefault()
		if(requestStatus === "" ||
		    amount === "" || 
		    requestStatus === "" ||
			 requestType === "" ||
			  accountNumber === "" || 
			  date === ""
			  ){
			

		   toast.error("fields not completed")
           return
		}
		const payload = {
			requestStatus,
			amount,
			requestType,
			narration,
			date,
			accountNumber
		}
		console.log(payload)
		setIsLoading(true)
	   dashboardService.addFunds(payload)
		   .then((response) =>{
			setIsLoading(false)
			 console.log(response)
			 if(response.message === "Transaction completed successfully"){
				Swal.fire({
					title: 'Transction Successful',
					text: response.message,
					icon: 'success',
					
				  })


			 }
			 setAmount("")
			 setRequestStatus("")
			 setDate("")
			 setRequestType("")
			 setNarration("")
			 
		   })
		   .catch((e) =>{
			console.log("dsgdgsdgsdfgsdsdfsdfsdfsf",e)
			let Msg = () => (
			  <div>
				<img src={logo} className="toaster-brand-img h-100 wi0" alt="main_logo" />
				<p> {e?.response?.data?.message} </p>
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
			setIsLoading(false);
		
		   })
		   .finally(()=>{
			 setDate("")
			 setAmount("")
			 setRequestStatus("")
			 setDate("")
			 setRequestType("")
			 setNarration("")
			 setAccountNumber("")
		   })
	}
    return (
        <> 
<div className="header">
						<h1 className="header-title">
						Add Fund
						</h1>				
					</div>
					<div className="row">
					<div className="col-md-12">
							<div className="card">
								<div className="card-header">
								
									<h6 className="card-subtitle text-muted">Please enter the receivers payment details</h6>
								</div>
								<div className="card-body">
									<form onSubmit = {addfunds}>
										<div className="row">
										  <div className="mb-3 col-md-6">
												<label >Enter Account Number</label>
												<input
												 type="text" 
												 className="form-control" 
												 id="inputPassword4" 
												 placeholder="Enter Account Number" 
												  value ={accountNumber}
												  onChange = {(e) => setAccountNumber(e.target.value)}
												 />
											</div>
											<div className="mb-3 col-md-6">
												<label >Request Status</label>
												<select 
												type="text" 
												className="form-control" 
												id="inputPassword4"
												value = {requestStatus}  
												onChange = {(e) => setRequestStatus(e.target.value)}
												>
												     <option value = ""> -- Select -- </option>
												      <option value="Paid"> Paid </option>
													  <option value="Pending">Pending</option>
													  <option value="Failed">Failed</option>
												</select>
										       </div>
										   </div>
										<div className="row mb-3">
										  <div className="mb-3 col-md-6">
											<label >Enter Amount</label>
											<input type="text" 
											className="form-control" 
											id="inputAddress2" 
											placeholder="Enter Amount" 
											 value = {amount}
											 onChange = {(e) => setAmount(e.target.value)}
											/>
										  </div>
										   <div className="mb-3 col-md-6">
											 <label >Request Type</label>
											 <select 
											 type="text" 
											 className="form-control" 
											 id="inputAddress2" 
											 value = {requestType}
											 onChange = {(e) => {setRequestType(e.target.value)}}
											 >
											    <option value = ""> -- Select -- </option>
											    <option value = "Transfer">Transfer</option>
												<option value = "Withdraw"> Withdraw</option>
												<option value = "Deposit"> Deposit</option>
											 </select>
										  </div>
										</div>
										<div className="row mb-3">
										    <div className="mb-3 col-md-6">
											 <label >Enter Amount</label>
											  <input 
											  type="date" 
											  className="form-control" 
											  id="inputAddress2" 
											  value = {date} 
											  onChange ={(e)=>setDate(e.target.value)}
											  
											  
											  />
										    </div>
										 
										  </div>
										
										<div className="mb-3 row">
											<label className="col-form-label col-sm-2 text-sm-end">Narration</label>
											<div className="col-sm-10">
												<textarea 
												className="form-control" 
												placeholder="Textarea" rows="3"
												 value = {narration}
												 onChange = {(e) => {setNarration(e.target.value)}}
												></textarea>
											</div>
											
										</div>
										<div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0">
											   {isLoading ? <PulseLoader color="#fff"/>:"Submit"}
											</button>
                                         
                                        </div>
									
									</form>
								</div>
							</div>
						</div>
					
					</div>
        </>
    
      );
}


export default AddFunds;