import React, { useEffect, useState,createContext,useMemo } from "react";
import "./CustomerDetails.css";
import { useRecordStatusContext } from "../../../core/modules";
import { TableHeader, Pagination, Search } from "../../DataTable";
import LoadingLogo from "../../LoadingLogo";
import dashboardService from "../../../core/services/dashboard.service"; 
import { ScaleLoader } from "react-spinners";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

const API_URL2 = process.env.REACT_APP_BaseApi_URL;

    const CustomerDetails = (props) => {
        const user = JSON.parse(localStorage.getItem("token"));
        const [totalItems, setTotalItems] = useState(0);
        const [currentPage, setCurrentPage] = useState(1);
        const [showLoader, setisLoader] = useState(false);
        const [sorting, setSorting] = useState({ field: "", order: "" });
        const [search, setSearch] = useState("");
        const [stat, setStat] = useState([]);
        const { isFetchResult,fetchResult} = useRecordStatusContext();
        const [allTransactions, setAllTransaction] = useState([]);
        const [isLoading ,setIsLoading ] = useState(false)
        const [customerId , setCustomerId] =useState("")
        const ITEMS_PER_PAGE = 20;
        const headers = [
            { name: "No#", field: "id", sortable: false },
            { name: "Customer ID", field: "customer_id", sortable: true },
             { name: "Email", field: "email", sortable: true },
            { name: "First Name", field: "first_name", sortable: true },
            { name: "Last Name", field: "last_name", sortable: true },
            { name: "Account Number", field: "account_no", sortable: false },
            { name : "Send Otp" }
        ];
      
  useEffect(() => {
	setisLoader(true)
	var arData = {
		Department: 'null'
	  }
	dashboardService.fetchAllCustomerAccounts().then(
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


const emailOtpRequest = async (email , id) =>{
    setCustomerId(id)
    const payload = {
        email : email
    }

    console.log(payload)
  
    setIsLoading(true)
    try{
     const  response = await axios.get(API_URL2 + "transferPin" , payload,
     {
        headers:{
          "Authorization": 'Bearer ' + user,
          
        }
      }
      
     )
     console.log(response)

    }
     catch(e){
        console.log(e)

     }
     finally{
        setIsLoading(false)
     }
    // dashboardService.emailOtpRequest(payload).then(
	// 	(response) => {
    //         console.log(response)
    //         console.log(response?.data?.code)
	// 			// setAllTransaction(response);
			        
    //         setIsLoading(false)
	// 			 })  
    //    .catch((e)=>{
    //         console.log(e)
    //    })
    

}
    return (
        <> 
<div className="header">
						<h1 className="header-title">
						 Customer Details
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
                                         <div className="text-center pagination-centered mx-auto ">
                                            <ScaleLoader color="#3838d6" className="mx-auto" />
                                         </div> :

                                       <>
                                        { commentsData2 ? (                                      
                                            commentsData2.map((result, index) => {
                                                // let narra = JSON.parse(result?.actionIn)
                                                return <tr key={result.id}>
                                                   <td style={{marginLeft:"900px"}}>{index}</td>
                                                   <td>{result?.customer_id}</td> 
                                                   <td>{result?.email}</td>
                                                   <td>{result?.first_name}</td>
                                                   <td>{result?.last_name}</td>
                                                   <td>{result?.account_no}</td>
                                                   {/* <td>{result?.TransIncurrentDate}</td> */}
                                                    <td>
         
                                                           <button className="btn btn-primary" onClick={() => emailOtpRequest(result.email,result.customer_id)}>
                                                             {isLoading && result?.customer_id === customerId ? <PulseLoader/> : "Send Otp"}
                                                           
                                                           </button>
                                                   </td>
                                                  
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



export default CustomerDetails;