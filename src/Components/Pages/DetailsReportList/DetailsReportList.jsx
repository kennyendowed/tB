import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../DataTable";
import "./DetailsReportList.css";


function DetailsReportList(props) {
  console.log(props)
  const [isFetchExisted, setFetchExisted] = useState([]);
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const ITEMS_PER_PAGE = 10;
  const headers = [
      { name: "No#", field: "id", sortable: false },
      { name: "Branch Code", field: "bra_code", sortable: true },
      { name: "Customer Number", field: "cus_num", sortable: true },
      { name: "Mapped Account", field: "accountNumber", sortable: true },
      { name: "Unit", field: "unit", sortable: false },
      { name: "Exited RM Code", field: "oldRMcODE", sortable: false },
      { name: "New RM Code", field: "newRMcode", sortable: false },
      { name: "Status", field: "RequestStatus", sortable: true }
  ];

  useEffect(() => {
    // console.log(response.data)
    setFetchExisted(props.RmsCustomers);

  }, [props]);


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
            
            <div className="card">
                <div className="card-header  ">
                       
                       <div className="col">
                        <div className="col-lg-2 col-7 ">
                            <Search
                                 width = "180px"
                                 placeholder="Search"
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                             /> 
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
                                                     {result.RequestStatus}

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


    </>

  );
}

export default DetailsReportList;