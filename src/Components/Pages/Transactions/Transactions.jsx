import React, { useEffect, useState,createContext,useMemo } from "react";
import "./Transactions.css";
import { useRecordStatusContext } from "../../../core/modules";
import { TableHeader, Pagination, Search } from "../../DataTable";
import LoadingLogo from "../../LoadingLogo";
import dashboardService from "../../../core/services/dashboard.service"; 
import { ScaleLoader } from "react-spinners";


    const Transactions = (props) => {
        const [totalItems, setTotalItems] = useState(0);
        const [currentPage, setCurrentPage] = useState(1);
        const [showLoader, setisLoader] = useState(false);
        const [sorting, setSorting] = useState({ field: "", order: "" });
        const [search, setSearch] = useState("");
        const [stat, setStat] = useState([]);
        const { isFetchResult,fetchResult} = useRecordStatusContext();
        const [allTransactions, setAllTransaction] = useState([]);
        const ITEMS_PER_PAGE = 20;
        const headers = [
            { name: "No#", field: "id", sortable: false },
            { name: "Transactions ID", field: "Transid", sortable: true },
          { name: "Narration", field: "actionIn", sortable: true },
            { name: "Amount", field: "amount", sortable: true },
            { name: "Status", field: "status", sortable: true },
            { name: "Date", field: "transDate", sortable: false }
        ];
      
  useEffect(() => {
	setisLoader(true)
	var arData = {
		Department: 'null'
	  }
	dashboardService.fetchAllTransactionRecords().then(
		(response) => {
            console.log(response)
				setAllTransaction(response);
			//         setFetchExisted(response.data.data.pendingRequest.rows);
            setisLoader(false)
				 });  
				 
				//  dashboardService.fetchPendingRequests(arData).then(
				// 	(response) => {
				// 		setisLoader(false)	
				// 		setFetchExisted(response.data.pendingRequest.rows);
				// 	});  
					// fetchResult();

}, []);
  const commentsData2 = useMemo(() => {
	let computedComments = allTransactions;
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

}, [allTransactions, currentPage, search, sorting]);

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
                            <div className="table-responsive position-relative">
                                <table className="table align-items-center mb-0">
                                    <TableHeader
                                        headers={headers}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                       
                                    <tbody className="h-auto">
                                    {
                                        showLoader ?
                                        <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center ">
                                            <ScaleLoader color="#3838d6" className="mx-auto" />
                                         </div> :

                                       <>
                                        { commentsData2 ? (                                      
                                            commentsData2.map((result, index) => {
                                                let narra = JSON.parse(result?.actionIn)
                                                return <tr key={result.id}>
                                                   <td style={{marginLeft:"900px"}}>{index}</td>
                                                   <td>{result?.transaction_ref}</td> 
                                                   <td>{narra["drRemarks"]}</td>
                                                   <td>{result?.amountIn}</td>
                                                   <td>{result?.transferIn_status}</td>
                                                   {/* <td>{result?.TransIncurrentDate}</td> */}
                                                 
                                                 
                                                  
                                                
                                                    <td>{new Date(result.createdAt).toLocaleString()}</td>
                                                  
                                               </tr>
                                            })  ) : (
                                            <>
                                            <tr>
                                                <td>No record</td>
                                            </tr>
                                         
                                             </>
                                              )
                                        } 
                                        </>
                                    }

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