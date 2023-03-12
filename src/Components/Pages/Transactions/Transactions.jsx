import React, { useEffect, useState,createContext,useMemo } from "react";
import "./Transactions.css";
import { useRecordStatusContext } from "../../../core/modules";
import { TableHeader, Pagination, Search } from "../../DataTable";
import LoadingLogo from "../../LoadingLogo";


    const Transactions = (props) => {
        const [totalItems, setTotalItems] = useState(0);
        const [currentPage, setCurrentPage] = useState(1);
        const [showLoader, setisLoader] = useState(false);
        const [sorting, setSorting] = useState({ field: "", order: "" });
        const [search, setSearch] = useState("");
        const [stat, setStat] = useState([]);
        const { isFetchResult,fetchResult} = useRecordStatusContext();
        const [isFetchExisted, setFetchExisted] = useState([]);
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
<div className="header">
						<h1 className="header-title">
						Transactions history
						</h1>
						
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
    
      );
}



export default Transactions;