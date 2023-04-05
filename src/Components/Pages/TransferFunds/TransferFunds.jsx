import React,{useState}from "react";
import "./TransferFunds.css";
import { useForm } from 'react-hook-form';
import { Modal, Button } from "react-bootstrap";

    const TransferFunds = (props) => {
		const [show, setShow] = useState(false);
		const [otp , setOtp ] = useState("")
		const [otp1 , setOtp1 ] = useState("")
		const [otp2 , setOtp2 ] = useState("")
		const [otp3 , setOtp3 ] = useState("")
		const handleClose = () => setShow(false);
		const handleClose2 = () =>setShow2(false)
		const [show1 , setShow1] = useState(false)
		const [show2 , setShow2] = useState(false)
		const handleClose1 = () => setShow1(false);
const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({ mode: "onChange" });
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
												{...register('accountNmae', { required: "Account Name is required", maxLength: 80 })}
												
												/>
												<p className="error-color">{errors.accountNmae?.message}</p>
											</div>
											<div className="mb-3 col-md-6">
												<label >Enter Account Number</label>
												<input 
												type="text" 
												className="form-control" 
												id="inputPassword4" 
												placeholder="Enter Account Number" 
												{...register('accountNumber', { required: "Account number is required", maxLength: 80
											
											
											})}
												/>
												<p className="error-color">{errors.accountNumber?.message}</p>
											</div>
										</div>
										<div className="mb-3">
											<label>Enter Routing Number</label>
											<input 
											type="text" 
											className="form-control" 
											id="inputAddress" 
											placeholder="Enter Routing Number" 
											{...register('routingNumber', { required: "Routing Number is required", 
											maxLength: {
												value: 9,
												message: "routing number must not be less than 9 characters"
											},
											minLength: {
												value: 9,
												message: "routing number must not be less than 9 characters",
											  }, 
										
										})}
											/>
											<p className="error-color">{errors.routingNumber?.message}</p>
										</div>
										<div className="mb-3">
											<label >Enter Bank Name</label>
											<input 
											type="text" 
											className="form-control" 
											id="inputAddress2" 
											placeholder="Enter Bank Name" 
											{...register('bankNmae', { required: "Bank Name is required", maxLength: 80 })}
											
											/>
											<p className="error-color">{errors.bankNmae?.message}</p>
										</div>
										<div className="mb-3">
											<label >Enter Amount</label>
											<input 
											type="text" 
											className="form-control" 
											id="inputAddress2" 
											placeholder="Enter Amount" 
											{...register('amount', { required: "Amount is required", maxLength: 80 })}
											
											/>
											<p className="error-color">{errors.amount?.message}</p>
										</div>
										<div className="col-lg-12 col-md-12">
									           
                                            <button
											type = "button"
											
											className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0"
											data-toggle="modal"
											 data-target="#exampleModalCenter"
											 onClick={()=>setShow(true)} 
											>Submit</button>
											
											
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
						centered show={show} onHide={handleClose}
						
						size="md">
						<Modal.Header closeButton>
						  {/* <Modal.Title>Modal heading</Modal.Title> */}
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
					
					</div>
	

        </>
    
      );
}


export default TransferFunds;