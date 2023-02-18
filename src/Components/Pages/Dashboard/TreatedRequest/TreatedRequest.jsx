import "./TreatedRequest.css"
import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../../DataTable";
import { toast } from 'react-toastify';
import logo from "../../../../assets/img/logos/providus-logo.svg";
import dashboardService from "../../../../core/services/dashboard.service";
import { Modal, Button } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import RMPendingRequestDetails from "../../RMPendingRequestDetails";

function TreatedRequest() {

    const [isFetchExisted, setFetchExisted] = useState([]);
    const [isFetchDepartment, setDepartment] = useState([]);
    const [RMsCustomerdata, setRMsCustomerdata] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [selectState, setSelectState] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const ITEMS_PER_PAGE = 10;
    const headers = [
        { name: "No#", field: "id", sortable: false },
        { name: "Branch Code", field: "bra_code", sortable: true },
        { name: "Customer Number", field: "cus_num", sortable: true },
        { name: "Mapped Account", field: "accountNumber", sortable: true },
        { name: "Unit", field: "unit", sortable: false },
        { name: "Exited RM Code", field: "oldRMcODE", sortable: false },
        { name: "New RM Code", field: "newRMcode", sortable: false }
    ];
    const handleShow = (record) => {
        // getData(record);
        setShow(true);
        setRMsCustomerdata(record);
    }

    const chnageSelect =(record)=>{
      
        var arData = {
            Department: record
          }
          dashboardService.fetchPendingRequests(arData).then(
                (response) => {

                    setFetchExisted(response.data.pendingRequest.rows);
                }  , 
                    (ex) => {
                            // console.log(ex );
                            if (ex.code === "ERR_NETWORK") {
                                let Msg = () => (
                                    <div>
                                        <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                                        <p> {ex.message} </p>
                                    </div>
                                )
                                toast.error(Msg, {
                                    position: "top-right",
                                    autoClose: 10000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
        
                            if (ex.response.data.status === "FALSE") {
                                let Msg = () => (
                                    <div>
                                        <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                                        <p> {ex.message}  </p>
                                        <p>❌ {ex.response.data.data[0].message} ❌</p>
                                    </div>
                                )
                                toast.error(Msg, {
                                    position: "top-right",
                                    autoClose: 10000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
                            if (ex.response.data?.error.code === 404) {
                                let Msg = () => (
                                    <div>
                                        <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                                        <p> {ex.message}  </p>
                                        <p>❌ {ex.response.data.error.message} ❌</p>
                                    </div>
                                )
                                toast.error(Msg, {
                                    position: "top-right",
                                    autoClose: 10000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                            }
        
                        }
                    );

    }


    useEffect(() => {
        dashboardService.fetchAllApproveDeparment().then(
            (response) => {
                    setDepartment(response.data.data);
                //         setFetchExisted(response.data.data.pendingRequest.rows);
                     });
        const timing = setTimeout(async () => {
            // dashboardService.fetchPendingRequests().then(
            //     (response) => {

            //         setFetchExisted(response.data.data.pendingRequest.rows);
            //     },
            //     (ex) => {
            //         // console.log(ex );
            //         if (ex.code === "ERR_NETWORK") {
            //             let Msg = () => (
            //                 <div>
            //                     <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
            //                     <p> {ex.message} </p>
            //                 </div>
            //             )
            //             toast.error(Msg, {
            //                 position: "top-right",
            //                 autoClose: 10000,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             });
            //         }

            //         if (ex.response.data.status === "FALSE") {
            //             let Msg = () => (
            //                 <div>
            //                     <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
            //                     <p> {ex.message}  </p>
            //                     <p>❌ {ex.response.data.data[0].message} ❌</p>
            //                 </div>
            //             )
            //             toast.error(Msg, {
            //                 position: "top-right",
            //                 autoClose: 10000,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             });
            //         }
            //         if (ex.response.data?.error.code === 404) {
            //             let Msg = () => (
            //                 <div>
            //                     <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
            //                     <p> {ex.message}  </p>
            //                     <p>❌ {ex.response.data.error.message} ❌</p>
            //                 </div>
            //             )
            //             toast.error(Msg, {
            //                 position: "top-right",
            //                 autoClose: 10000,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             });
            //         }

            //     }
            // );

        }, 1000)
        return () => clearTimeout(timing);

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
            <div className="row my-4">
                <div className="col-lg-12 col-md-6 mb-md-0 mb-4">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-lg-6 col-7">
                                    <Search
                                        onSearch={value => {
                                            setSearch(value);
                                            setCurrentPage(1);
                                        }}
                                    />                                                      
                                </div>
                                <div className="col-lg-4 mt-lg-0 mt-4">                                
                                <select   
                                   name="reason"                
                                   onChange={(e)=>chnageSelect(e.target.value)}
                                   value={selectState}     
                                    className="form-control" required
                                   >
                                             <option value=' '>-----o	Select Department-----</option>
                                                          {isFetchDepartment.map((result,index) => {
                                                     
                                                             return <option key={result.department} value={result.department}> o {result.department} </option> 


                                                               })
                                               }
                     
    
                                  </select> 
              
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <TableHeader
                                        headers={headers}
                                        onSorting={(field, order) =>
                                            setSorting({ field, order })
                                        }
                                    />
                       
                                    <tbody>

                                        {commentsData2 &&
                                            commentsData2.map((result, index) => {
                                                return <tr key={result.id}>
                                                    <td>{index}</td>
                                                    <td>{result.bra_code}</td>
                                                    <td>{result.cus_num}</td>
                                                    <td>{result.accountNumber}</td>
                                                    <td>{result.unit}</td>
                                                    <td>{result.oldRMcODE}</td>
                                                    <td>{result.newRMcode}</td>
                                                    <td className="text-right">
                                                        <Button variant="primary" onClick={() => handleShow(result)}>
                                                            View Customer
                                                        </Button>

                                                    </td>
                                                </tr>
                                            })  
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 col-5 my-auto text-end">
                                    <Pagination
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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RMPendingRequestDetails RmsCustomers={RMsCustomerdata} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
         </>
  );
}

export default TreatedRequest;
