import React from "react";
import "./AddFunds.css";


    const AddFunds = (props) => {
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
									<form>
										<div className="row">
										<div className="mb-3 col-md-6">
												<label >Enter Account Number</label>
												<input type="text" className="form-control" id="inputPassword4" placeholder="Enter Account Number" />
											</div>
										</div>
										<div className="mb-3">
											<label >Enter Amount</label>
											<input type="text" className="form-control" id="inputAddress2" placeholder="Enter Amount" />
										</div>
										<div className="mb-3 row">
											<label className="col-form-label col-sm-2 text-sm-end">Narration</label>
											<div className="col-sm-10">
												<textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
											</div>
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


export default AddFunds;