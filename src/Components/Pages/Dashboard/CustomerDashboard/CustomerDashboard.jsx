import React, { useEffect, useState,createContext } from "react";
import "./CustomerDashboard.css";
import { BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.defaults.categoryScale = Chart.defaults.scale;
// Chart.controllers.category = Chart.controllers.bar.extend({
//   updateIndexScale: function () {
//     const me = this;
//     const meta = me.getMeta();
//     const xScale = me.getScaleForId(meta.xAxisID);
//     const yScale = me.getScaleForId(meta.yAxisID);

//     if (!xScale || !yScale) {
//       return;
//     }

//     if (xScale.options.type === 'category') {
//       yScale.options.labels = xScale.options.labels;
//       yScale.options.labelRotation = xScale.options.labelRotation;
//     }

//     me._updateRadius();
//   },
// });
// Chart.plugins.unregister(ChartDataLabels);

function CustomerDashboard() {

    const [stat, setStat] = useState([]);

    // const fetchData = async () => {
    //   const API_URL2 = process.env.REACT_APP_BaseApi_URL;
    //   const response = await fetch(API_URL2 + "barReport", {
    //               method: 'GET',
    //               headers: {
    //                 'authorization': accessToken
    //               }
    //             });
    //   const data = await response.json()
    //   setStat(data.data);
    // }
  
    // useEffect(() => {
    //   fetchData()
    // }, []);
  //  const transaction = stat?.AllTransactions;
  const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  ];
return (
<>
<div className="row">

{/* <div className="col-xl-6 col-xxl-5"> */}
<div className="col-md-6 col-lg-3 col-xl">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col mt-0">
											<h5 className="card-title">Available Balance</h5>
										</div>

										<div className="col-auto">
											<div className="avatar">
                                            <div className="avatar-title rounded-circle bg-primary-dark">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
												</div>
												{/* <div className="avatar-title rounded-circle bg-primary-dark">
													<i className="align-middle" data-feather="dollar-sign"></i>
												</div> */}
											</div>
										</div>
									</div>
									<h1 className="display-5 mt-1 mb-3">$25.300</h1>
                                    <div className="mb-0">
										<span className="text-danger"> <i className="mdi mdi-arrow-bottom-right"></i> $25.300 </span>
										Total Balance
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-6 col-xxl-7 d-flex">
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

										
										</div>
									</div>
									<h5 className="card-title mb-0">Recent Transactions</h5>
								</div>
								<div className="card-body py-3">
                                <div className="chart chart-md">
                                <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#ccc" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>

{/* <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={transaction}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
                             
									</div>
								</div>
							</div>
						</div>

						
					</div>
</>



)


}

export default CustomerDashboard;