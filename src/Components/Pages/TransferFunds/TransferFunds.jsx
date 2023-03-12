import React from "react";
import "./TransferFunds.css";


    const TransferFunds = (props) => {
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
									<form>
										<div className="row">
											<div className="mb-3 col-md-6">
												<label >Enter Full Name</label>
												<input type="text" className="form-control" id="inputEmail4" placeholder="Enter Full Name" />
											</div>
											<div className="mb-3 col-md-6">
												<label >Enter Account Number</label>
												<input type="text" className="form-control" id="inputPassword4" placeholder="Enter Account Number" />
											</div>
										</div>
										<div className="mb-3">
											<label>Enter Routing Number</label>
											<input type="text" className="form-control" id="inputAddress" placeholder="Enter Routing Number" />
										</div>
										<div className="mb-3">
											<label >Enter Bank Name</label>
											<input type="text" className="form-control" id="inputAddress2" placeholder="Enter Bank Name" />
										</div>
										<div className="mb-3">
											<label >Enter Amount</label>
											<input type="text" className="form-control" id="inputAddress2" placeholder="Enter Amount" />
										</div>
										<div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn-lg btn-primary border-0 bg-gradient-info w-100 h-80 mt-4 login_button mb-0">Submit</button>
                                         
                                        </div>
									</form>
								</div>
							</div>
						</div>
					
					</div>
        </>
    
      );
}


export default TransferFunds;