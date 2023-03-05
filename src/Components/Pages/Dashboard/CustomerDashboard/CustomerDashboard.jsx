import React from "react";
import "./CustomerDashboard.css";


function CustomerDashboard() {

return (
<>
<div className="row">
						<div className="col-xl-6 col-xxl-7">
							<div className="card flex-fill w-100">
								<div className="card-header">
									<div className="card-actions float-end">
										<a href="#" className="me-1">
											<i className="align-middle" data-feather="refresh-cw"></i>
										</a>
										<div className="d-inline-block dropdown show">
											<a href="#" data-bs-toggle="dropdown" data-bs-display="static">
												<i className="align-middle" data-feather="more-vertical"></i>
											</a>

											<div className="dropdown-menu dropdown-menu-end">
												<a className="dropdown-item" href="#">Action</a>
												<a className="dropdown-item" href="#">Another action</a>
												<a className="dropdown-item" href="#">Something else here</a>
											</div>
										</div>
									</div>
									<h5 className="card-title mb-0">Recent Movement</h5>
								</div>
								<div className="card-body py-3">
									<div className="chart chart-sm">
										<canvas id="chartjs-dashboard-line"></canvas>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-6 col-xxl-5 d-flex">
							<div className="w-100">
								<div className="row">
									<div className="col-sm-6">
										<div className="card">
											<div className="card-body">
												<div className="row">
													<div className="col mt-0">
														<h5 className="card-title">Sales Today</h5>
													</div>

													<div className="col-auto">
														<div className="avatar">
															<div className="avatar-title rounded-circle bg-primary-dark">
																<i className="align-middle" data-feather="truck"></i>
															</div>
														</div>
													</div>
												</div>
												<h1 className="display-5 mt-1 mb-3">2.562</h1>
												<div className="mb-0">
													<span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -2.65% </span>
													Less sales than usual
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-body">
												<div className="row">
													<div className="col mt-0">
														<h5 className="card-title">Visitors Today</h5>
													</div>

													<div className="col-auto">
														<div className="avatar">
															<div className="avatar-title rounded-circle bg-primary-dark">
																<i className="align-middle" data-feather="users"></i>
															</div>
														</div>
													</div>
												</div>
												<h1 className="display-5 mt-1 mb-3">17.212</h1>
												<div className="mb-0">
													<span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 5.50% </span>
													More visitors than usual
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="card">
											<div className="card-body">
												<div className="row">
													<div className="col mt-0">
														<h5 className="card-title">Total Earnings</h5>
													</div>

													<div className="col-auto">
														<div className="avatar">
															<div className="avatar-title rounded-circle bg-primary-dark">
																<i className="align-middle" data-feather="dollar-sign"></i>
															</div>
														</div>
													</div>
												</div>
												<h1 className="display-5 mt-1 mb-3">$24.300</h1>
												<div className="mb-0">
													<span className="text-success"> <i className="mdi mdi-arrow-bottom-right"></i> 8.35% </span>
													More earnings than usual
												</div>
											</div>
										</div>
										<div className="card">
											<div className="card-body">
												<div className="row">
													<div className="col mt-0">
														<h5 className="card-title">Pending Orders</h5>
													</div>

													<div className="col-auto">
														<div className="avatar">
															<div className="avatar-title rounded-circle bg-primary-dark">
																<i className="align-middle" data-feather="shopping-cart"></i>
															</div>
														</div>
													</div>
												</div>
												<h1 className="display-5 mt-1 mb-3">43</h1>
												<div className="mb-0">
													<span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> -4.25% </span>
													Less orders than usual
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
</>



)


}

export default CustomerDashboard;