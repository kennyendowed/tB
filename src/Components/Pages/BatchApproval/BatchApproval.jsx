import './BatchApproval.css';
import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../../Components/DataTable";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";
import dashboardService from "../../../core/services/dashboard.service";
import { Modal, Button } from "react-bootstrap";
import LoadingLogo from "../../../Components/LoadingLogo";
import { useRecordStatusContext } from "../../../core/modules";
import BatchListApproval from '../BatchListApproval';




function BatchApproval(props){
    const [isFetchExisted, setFetchExisted] = useState([]);
    const [isFetchDepartment, setDepartment] = useState([]);
    const [RMsCustomerdata, setRMsCustomerdata] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectState, setSelectState] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [show, setShow] = useState(false);
    const [showLoader, setisLoader] = useState(false)
    const { isFetchResult,fetchResult} = useRecordStatusContext();

//   console.log(RMsCustomerdata)
    const ITEMS_PER_PAGE = 10;
    const bashpendingRequest = JSON.parse(localStorage.getItem("bashpendingRequest"));
    // console.log(bashpendingRequest)
    const action = localStorage.getItem("action")
    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Branch Code", field: "bra_code", sortable: true },
        { name: "Mapped Account", field: "accountNumber", sortable: true },
        { name: "Customer Number", field: "cus_num", sortable: true },
       
       
        { name: "Exited RM Code", field: "oldRMcODE", sortable: false },
        { name: "New RM Code", field: "newRMcode", sortable: false },
        { name: "Status", field: "RequestStatus", sortable: false },        
        { name: "Entry Date", field: "createdAt", sortable: false }
    ];

    const handleShow = (record,index) => {
        // getData(record);
        setShow(true);
        setRMsCustomerdata({...record,index});
    }
    // let dt = bashpendingRequest?.map((item) =>{
    //     return(
    //         item.id

    //     )
           
    //     })
    // console.log( dt)
    
    // const bulkUpload = () => {
    //     const payload = {
    //         data:[
    //             {
    //             id:  bashpendingRequest?.map((item) =>{
    //                 return(
    //                     item.id
        
    //                 )
                       
    //                 }),
    //             }

    //         ],
          
    //         action: action


    //     }
    //     console.log(payload)
    //     dashboardService.BashApproveDeclineRequests(payload).then(
    //         (response) => {
    //             //  console.log(response)
                    
    //             // setFetchExisted(response.data.bashpendingRequest);
    //             setisLoader(false)
    //             // console.log(response.data.pendingRequest.rows)
    //         });  
          

    // }
    // console.log(action)
    useEffect(() => {
        setisLoader(true)
                     dashboardService.fetchbatchPendingRequests().then(
                        (response) => {
                            //  console.log(response.data.bashpendingRequest)
                                
                            setFetchExisted(response.data.bashpendingRequest);
                            setisLoader(false)
                            // console.log(response.data.pendingRequest.rows)
                        });  
                        fetchResult();
        	
    }, []);

    const refresh = () => {
        setisLoader(true)
        dashboardService.fetchbatchPendingRequests().then(
          (response) => {
            setisLoader(true)
            setFetchExisted(response.data.bashpendingRequest);
            setisLoader(false)
    
    
            // console.log(response.data.pendingRequest.rows)
          }).catch(function (err) {
            console.log("errorrrrrrrr", err)
            setFetchExisted([]);
            setisLoader(false)
          });
    
    
    
      }



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

        if (computedComments.length > 0){

            return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

        }
        else {
            return computedComments.data;
        }

    }, [isFetchExisted, currentPage, search, sorting]);
    const handleClose = () =>{
        refresh();
        setShow(false)

    }

  

    return (
        <> 
         <div className="row my-4">
                <div className="col-lg-12 col-md-6 mb-md-0 mb-4">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-lg-6 col-7 ">
                                    <Search
                                        onSearch={value => {
                                            setSearch(value);
                                            setCurrentPage(1);
                                        }}
                                    />                                                      
                                </div>
                              
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                        {showLoader && (
                                        <LoadingLogo />
                                        )}
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <TableHeader
                                        headers={headers}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                       
                                    <tbody >
                                 
                                        { commentsData2 ? (                                      
                                            commentsData2.map((result, index) => {
                                                return <tr key={result.id}>
                                                    <td style={{marginLeft:"900px"}}>{index}</td>
                                                    <td>{result.bra_code}</td>
                                                    <td>{result.accountNumber}</td>
                                                    <td>{result.cus_num}</td>
                                                  
                                                    <td>{result.oldRMcODE}</td>
                                                    <td>{result.newRMcode}</td>
                                                    <td>{result.RequestStatus}</td>
                                                    <td>{new Date(result.createdAt).toLocaleString() }</td>
                                                    <td className="text-right">
                                                        <Button variant="variant" onClick={() => handleShow(result,index)}>
                                                            View Bulk Upload
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
              <Modal show={show} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Batch Upload</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BatchListApproval RmsCustomers={RMsCustomerdata} />
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button
                         variant="secondary"
                        //  RmsCustomers = {RMsCustomerdata} 
                         onClick = {() =>{bulkUpload()}}
                         
                         >
                            Upload 
                        </Button> */}

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 
            </div>
         </>
        );
    }
    

    export default BatchApproval;











