import React, { useEffect, useState,createContext,useMemo } from "react";
import "./CustomerDashboard.css";
import { BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRecordStatusContext } from "../../../../core/modules";
import { TableHeader, Pagination, Search } from "../../../DataTable";
import LoadingLogo from "../../../LoadingLogo";


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
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
	const [showLoader, setisLoader] = useState(false);
	const [sorting, setSorting] = useState({ field: "", order: "" });
	const [search, setSearch] = useState("");
    const [stat, setStat] = useState([]);
	const { isFetchResult,fetchResult} = useRecordStatusContext();
	const [isFetchExisted, setFetchExisted] = useState([]);

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
  const ITEMS_PER_PAGE = 20;
  const headers = [
	  { name: "No#", field: "id", sortable: false },
	  { name: "Transactions ID", field: "Transid", sortable: true },
	  { name: "Amount", field: "amount", sortable: true },
	  { name: "Status", field: "status", sortable: true },
	  { name: "Date", field: "transDate", sortable: false }
  ];
  useEffect(() => {
	setisLoader(true)
	var arData = {
		Department: 'null'
	  }
	// dashboardService.fetchAllDeparment().then(
	// 	(response) => {
	// 			setDepartment(response.data.data);
	// 		//         setFetchExisted(response.data.data.pendingRequest.rows);
	// 			 });  
				 
	// 			 dashboardService.fetchPendingRequests(arData).then(
	// 				(response) => {
	// 					setisLoader(false)	
	// 					setFetchExisted(response.data.pendingRequest.rows);
	// 				});  
	// 				fetchResult();

}, []);
  const commentsData2 = useMemo(() => {
	let computedComments = isFetchExisted;
	if (search) {
		computedComments = computedComments.filter(comment =>
			comment.newRMcode.toLowerCase().includes(search) || comment.oldRMcODE.toLowerCase().includes(search) || comment.accountNumber.toLowerCase().includes(search)
		);
	}

	setTotalItems(computedComments.length);

	//Sorting comments
	if (sorting.field) {
		const reversed = sorting.order === "asc" ? 1 : -1;
		computedComments = computedComments.sort(
			(a, b) =>
				reversed * a[sorting.field].localeCompare(b[sorting.field])
		);
	}

	if (computedComments.length > 0) {
		return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
	}
	else {
		return computedComments.data;
	}

}, [isFetchExisted, currentPage, search, sorting]);




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
{/* 
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
                                <div className="chart chart-md"> */}

<div className="col-md-6 col-lg-3 col-xl">
							<div className="card">
								<div className="card-body">

								<ResponsiveContainer width="100%" height={185}>
                                <LineChart width={600} height={300} data={data}  margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#ccc" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>   
   </ResponsiveContainer> 

	</div>
	</div> 
							</div>
						</div>
          <div className="row">
						<div className="col-12">
							<div className="card">
							<div className="card-body px-0 pb-2">
                        {/* {showLoader && (
                                        <LoadingLogo  title="Hello, world!" text="Please hold while we fetch records."/>
                                        )} */}
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <TableHeader
                                        headers={headers}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                       
                                    <tbody >
                                 
                                        {/* { commentsData2 ? (                                      
                                            commentsData2.map((result, index) => {
                                                return <tr key={result.id}>
                                                    <td style={{marginLeft:"900px"}}>{index}</td>
                                                    <td>{result.bra_code}</td>
                                                    <td>{result.cus_num}</td>
                                                    <td>{result.accountNumber}</td>
                                                <td>{result.unit}</td> 
                                                    <td>{result.oldRMcODE}</td>
                                                    <td>{result.newRMcode}</td>
                                                    <td>{result.RequestStatus}</td>
                                                    <td>{new Date(result.createdAt).toLocaleString() //undefined ,options
                                                    
                                                    
                                                    }</td>
                                                    <td className="text-right">
                                                        <Button variant="variant" onClick={() => handleShow(result,index)}>
                                                            View Customer
                                                        </Button>

                                                    </td>
                                                </tr>
                                            })  ) : (
                                            <>
                                            <tr>
                                                <td>No record</td>
                                            </tr>
                                         
                                             </>
                                              )
                                        } */}


                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 col-5 my-auto text-end">
                                    <Pagination
                                        variant="variant"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        total={totalItems}
                                        itemsPerPage={ITEMS_PER_PAGE}
                                        currentPage={currentPage}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                </div>
                        </div>
							</div>
						</div>
					</div>

		


</>



)


}

export default CustomerDashboard;