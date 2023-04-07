import React, { useState , useEffect } from "react";
import "./TransferFunds.css";
import { useForm } from 'react-hook-form';
import { Modal, Button } from "react-bootstrap";
import dashboardService from "../../../core/services/dashboard.service";


    const TransferFunds = (props) => {

		const INITIAL_VALUE = {
			accountNumber : "",
			accountNmae : "",
			amount: "",
			bankNmae : "",
			routingNumber: ""

		}
		const [show, setShow] = useState(false);
		const [otp , setOtp ] = useState("")
		const [data , setData ] = useState(INITIAL_VALUE)
		const [otp1 , setOtp1 ] = useState("")
		const [otp2 , setOtp2 ] = useState("")
		const [otp3 , setOtp3 ] = useState("")
		const handleClose = () => setShow(false);
		const handleClose1 = () => setShow1(false);
		const handleClose2 = () =>setShow2(false)
		const handleClose3 = () =>setShow2(false)
		const handleClose4 = () =>setShow2(false)
		const [show1 , setShow1] = useState(false)
		const [show2 , setShow2] = useState(false)
		const [show3 , setShow3] = useState(false)
		const [show4 , setShow4] = useState(false)
		const [ isValid , setIsValid ] = useState(false)
		const [ showLoader , setisLoader ] = useState(false)
const requestOtp = () =>{	
	setisLoader(true)	
		dashboardService.transferPin().then(
        	(response) => {
                setisLoader(false)
                console.log(response)
        
        			 })
             .catch(err => 
                
                console.log(err)
                
                )   
			 }

const handlefirstShow = () =>{
	console.log(data)
	 setShow(true)
}

const handleInputChange = (event) => {
	const { name, value } = event.target;

	setData((prevData) => ({

		...prevData,
		[name]: value,

	  }));
}
useEffect(()=>{

	if( data.accountNmae === "" || 
	    data.accountNumber === "" || 
	    data.routingNumber === "" || 
	    data.bankNmae === "" || 
	    data.amount === "" ){
		console.log(true)
		setIsValid(true)
	}else{
		console.log(false)
		setIsValid(false)
	}
},[
	data.accountNmae,
	data.routingNumber,
	data.accountNumber,
	data.bankNmae,
	data.amount


])
    return (
        <> 
<div className="header">
						<h1 className="header-title">
						Fund transfer
						</h1>
						
					</div>
					<div className="row">
					<div className="col-md-12">
							<div className="card">
								<div className="card-header">
								
									<h6 className="card-subtitle text-muted">Please enter the receivers payment details</h6>
								</div>
								<div className="card-body">
									<form  >
										<div className="row">
											<div className="mb-3 col-md-6">
												<label >Enter Full Name</label>
												<input 
												type="text" 
												className="form-control" 
												id="inputEmail4" 
												placeholder="Enter Full Name" 
												value = {data.accountNmae}
												name = "accountNmae"
											   onChange = {handleInputChange}
												
												/>
												<div className="text-danger">{(data.accountNmae) ? "" : "Account name is required"}</div>
											</div>
											<div className="mb-3 col-md-6">
												<label >Enter Account Number</label>
												<input 
												type="number" 
												className="form-control" 
												id="inputPassword4" 
												placeholder="Enter Account Number" 
												value = {data.accountNumber}
												name = "accountNumber"
												onChange = {handleInputChange}
												
												/>
												<div className="text-danger">{(data.accountNumber) ? "" : "Account Number is required"}</div>
											</div>
										</div>
										<div className="mb-3">
											<label>Enter Routing Number</label>
											<input 
											type="number"  
											className="form-control" 
											id="inputAddress" 
											placeholder="Enter Routing Number" 
											value={data.routingNumber}
											name = "routingNumber"
											
											onChange = {handleInputChange}
											/>
											<div className="text-danger">{(data.routingNumber) ? "" : "Account Number is required"}</div>
										</div>
										<div className="mb-3">
											<label >Enter Bank Name</label>
											<input 
											type="text"  
											className="form-control" 
											id="inputAddress2" 
											placeholder="Enter Bank Name" 
											value = {data.bankNmae}
											name = "bankNmae"
											onChange = {handleInputChange}
											
											
											/>
											<div className="text-danger">{(data.bankNmae) ? "" : "Account Number is required"}</div>
										</div>
										<div className="mb-3">
											<label >Enter Amount</label>
											<input 
											type="number"  
											className="form-control" 
											id="inputAddress2" 
											placeholder="Enter Amount" 
											name = "amount"
											value = {data.amount}
											onChange = {handleInputChange}
											/>
											<div className="text-danger ">{(data.amount) ? "" : "Account Number is required"}</div>
										</div>
										<div className="col-lg-12 col-md-12">
									           
                                            <button
											  type = "button"
											
											  className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0"
											  data-toggle="modal"
											  data-target="#exampleModalCenter"
											  onClick={()=>setShow(true)} 
											  disabled = {isValid}
											>
											  Submit
										
											</button>
											
											
                                        </div>
										
										
										
									</form>
								</div>
							</div>
						</div>
						<Modal 
						aria-labelledby="contained-modal-title-vcenter"
						centered show={show} onHide={handleClose}
						
						size="md">
						<Modal.Header closeButton>
					     <Modal.Title>20% to completion </Modal.Title> 
						</Modal.Header>
						<Modal.Body>
						<label >OTP</label>
								<input 
									type="text" 
									 className="form-control" 
									 id="inputAddress2" 
									 placeholder="Enter Otp"
									 value = {otp} 	
									/>
											
						
						</Modal.Body>
						<Modal.Footer>
						
						  <Button variant="primary" onClick={() => requestOtp()} >
							Request OTP
						  </Button>
						  <Button variant="secondary" 
						//   onClick={()=>setShow1(true)}
						  
						  > 
							Verify OTP
						  </Button>
						 
						</Modal.Footer>
					  </Modal>
					  <Modal 
						aria-labelledby="contained-modal-title-vcenter"
						centered show={show1} onHide={handleClose1}
						
						size="md">
						<Modal.Header closeButton>
						  <Modal.Title>40% to completion</Modal.Title> 
						</Modal.Header>
						<Modal.Body>
						<label >OTP</label>
								<input 
									type="text" 
									 className="form-control" 
									 id="inputAddress2" 
									 placeholder="Enter Otp"
									 value = {otp} 	
									/>
						
						</Modal.Body>
						<Modal.Footer>
						
						  <Button variant="primary" onClick={()=>setShow2(true)}>
							Request OTP
						  </Button>
						  <Button variant="secondary" onClick={handleClose1}>
						  Close
						</Button>
						</Modal.Footer>
					  </Modal>
					  <Modal 
						aria-labelledby="contained-modal-title-vcenter"
						centered show={show2} onHide={handleClose2}
						
						size="md">
						<Modal.Header closeButton>
						   <Modal.Title>60% to completion </Modal.Title> 
						</Modal.Header>
						<Modal.Body>
						<label >OTP</label>
								<input 
									type="text" 
									 className="form-control" 
									 id="inputAddress2" 
									 placeholder="Enter Otp"
									 value = {otp} 	
									/>
											
						
						</Modal.Body>
						<Modal.Footer>
						
						  <Button variant="primary" onClick={()=>setShow3(true)} >
							Request OTP
						  </Button>
						  <Button variant="secondary">
							Verify OTP
						  </Button>
						 
						</Modal.Footer>
					  </Modal>
					  <Modal 
						aria-labelledby="contained-modal-title-vcenter"
						centered show={show3} onHide={handleClose3}
						
						size="md">
						<Modal.Header closeButton>
						   <Modal.Title>80% to completion</Modal.Title> 
						</Modal.Header>
						<Modal.Body>
						<label >OTP</label>
								<input 
									type="text" 
									 className="form-control" 
									 id="inputAddress2" 
									 placeholder="Enter Otp"
									 value = {otp} 	
									/>
											
						
						</Modal.Body>
						<Modal.Footer>
						
						  <Button variant="primary" onClick={()=>setShow4(true)} >
							Request OTP
						  </Button>
						  <Button variant="secondary">
							Verify OTP
						  </Button>
						 
						</Modal.Footer>
					  </Modal>
					  <Modal 
					  aria-labelledby="contained-modal-title-vcenter"
					  centered show={show} onHide={handleClose}
					  
					  size="md">
					  <Modal.Header closeButton>
						 <Modal.Title>20% to completion</Modal.Title> 
					  </Modal.Header>
					  <Modal.Body>
					  <label >OTP</label>
							  <input 
								  type="text" 
								   className="form-control" 
								   id="inputAddress2" 
								   placeholder="Enter Otp"
								   value = {otp} 	
								  />
										  
					  
					  </Modal.Body>
					  <Modal.Footer>
					  
						<Button variant="primary" onClick={()=>setShow1(true)} >
						  Request OTP
						</Button>
						<Button variant="secondary">
						  Verify OTP
						</Button>
					   
					  </Modal.Footer>
					</Modal>
					<Modal 
					aria-labelledby="contained-modal-title-vcenter"
					centered show={show4} onHide={handleClose4}
					
					size="md">
					<Modal.Header closeButton>
					   <Modal.Title>100% to completion</Modal.Title> 
					</Modal.Header>
					<Modal.Body>
					<label >OTP</label>
							<input 
								type="text" 
								 className="form-control" 
								 id="inputAddress2" 
								 placeholder="Enter Otp"
								 value = {otp} 	
								/>
										
					
					</Modal.Body>
					<Modal.Footer>
					
					  <Button variant="primary" onClick={()=>setShow4(true)} >
						Request OTP
					  </Button>
					  <Button variant="secondary">
						Verify OTP
					  </Button>
					 
					</Modal.Footer>
				  </Modal>
					
					</div>
	

        </>
    
      );
}


export default TransferFunds;