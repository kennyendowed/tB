import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../DataTable";
import "./BatchListAproval.css";
import Checkbox from "../../Checkbox/Checkbox";
import dashboardService from "../../../core/services/dashboard.service";
import LoadingLogo from "../../LoadingLogo";
import { Modal, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";

function BatchListApproval(props) {
  //   console.log(props)
  const [isFetchExisted, setFetchExisted] = useState([]);
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [showLoader, setisLoader] = useState(false)
  const [action, setAction] = useState("")
  const [comment, setComment] = useState("")

  const ITEMS_PER_PAGE = 10;
  const baTch = props.RmsCustomers.bashID


  const headers = [
    { name: "select" },
    { name: "No#", field: "id", sortable: false },
    { name: "Branch Code", field: "bra_code", sortable: true },
    { name: "Customer Number", field: "cus_num", sortable: true },
    { name: "Mapped Account", field: "accountNumber", sortable: true },
    { name: "Unit", field: "unit", sortable: false },
    { name: "Exited RM Code", field: "oldRMcODE", sortable: false },
    { name: "New RM Code", field: "newRMcode", sortable: false },
    { name: "Status", field: "RequestStatus", sortable: true }
  ];
  localStorage.setItem("action", action)
  useEffect(() => {
    // console.log(response.data)
    setisLoader(true)
    dashboardService.ViewAllRequests(baTch).then(
      (response) => {
        // console.log("tttuuuuuuuttttt",response.data.bashpendingRequest)       
        setisLoader(true)
        setFetchExisted(response.data.bashpendingRequest);
        setisLoader(false)
        // console.log(response.data.pendingRequest.rows)

      }).catch(function (err) {
        console.log("errorrrrrrrr", err)
        setFetchExisted([]);
        setisLoader(false)
      });
    // setFetchExisted(props.RmsCustomers);

  }, [props]);


  const refresh = () => {
    setisLoader(true)
    dashboardService.ViewAllRequests(baTch).then(
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
  const bulkUpload = () => {

    if (action === "") {
      toast.error()
    }
    const payload = {
      data: [
        {
          id: isCheck
        }

      ],

      ActionRequest: action,
      reason: comment


    }
    // console.log(payload)
    setisLoader(true)
    dashboardService.BashApproveDeclineRequests(payload).then(
      (response) => {
        //  console.log(response)
        //  console.log(response.code)
        if (response.code === 200) {

          let Msg = () => (
            <div>
              <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
              <p> {response.data} </p>
            </div>
          )
          toast.success(Msg, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          refresh()

        }


      //  setisLoader(false)

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

    if (computedComments.length > 0) {
      return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
    }
    else {
      return computedComments.data;
    }

  }, [isFetchExisted, currentPage, search, sorting]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(isFetchExisted.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };


  //console.log(isCheck)

  return (
    <>
      <div className="row my-4">
        <div className="card">
          <div className="card-header  ">
            <div className="card p-4">

              <div className="row">

                <div className="col-lg-2 col-12 align-item-center justify-content-center d-flex">
                  {/* <label className="d-flex flex-row ">Select all</label> */}
                  <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                  />
                  <label className=" align-item-center justify-content-center my-auto"> Select All </label>
                </div>
                <div className="col-lg-3 mt-4 col-7 align-item-center justify-content-center my-auto ">

                  <Search
                    width="200px"
                    placeholder="Search"
                    onSearch={value => {
                      setSearch(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>

                <div className="col-lg-3 mt-4 col-12 align-item-center justify-content-center my-auto ">

                  <select value={action} onChange={(e) => setAction(e.target.value)} className="form-control col-6">
                    <option value="">---Select action---</option>
                    <option value="Approve">Approve</option>
                    <option value="Decline">Decline</option>
                  </select>
                </div>
                <div className="col-lg-2 mt-4 col-12 align-item-center justify-content-center my-auto ">
                  <input
                    type="text"
                    value={comment}
                    className="form-control"
                    onChange={(e) => { setComment(e.target.value) }}

                    placeholder="Comment"
                    style={{ height: "40px", }}
                  />

                </div>

                <div className="col-lg-2 col-12 mt-4 align-item-center justify-content-center my-auto">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => { bulkUpload() }}
                    style={{ height: "40px", width: "160px" }}
                  >
                    Submit
                  </Button>

                </div>




                <div>

                </div>

              </div>
            </div>

          </div>
          {showLoader && (
            <LoadingLogo />
          )}


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
                        <td className="pl-4">
                          <Checkbox
                            key={result.id}
                            type="checkbox"
                            name={result.accountNumber}
                            id={result.id}

                            handleClick={handleClick}
                            isChecked={isCheck.includes(result.id)}
                          /></td>
                        <td>{index}</td>
                        <td>{result.bra_code}</td>
                        <td>{result.cus_num}</td>
                        <td>{result.accountNumber}</td>
                        <td>{result.unit}</td>
                        <td>{result.oldRMcODE}</td>
                        <td>{result.newRMcode}</td>
                        <td className="text-right">
                          {result.RequestStatus}

                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg- col  overflow-auto w-100">
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


    </>

  );
}

export default BatchListApproval;