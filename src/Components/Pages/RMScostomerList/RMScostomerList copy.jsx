import React, { useEffect, useState, useMemo } from "react";
import "./RMScostomerList.css";
import { Button } from "react-bootstrap";
import { TableHeader, Pagination, Search } from "../../../Components/DataTable";

function RMScostomerList(props) {
  console.log(props)
	const [isFetchExisted, setFetchExisted] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");
	const [sorting, setSorting] = useState({ field: "", order: "" });
	const ITEMS_PER_PAGE = 20;
	const headers = [
	  { name: "No#", field: "id", sortable: false },
	  { name: "Name", field: "name", sortable: true },
	  { name: "customerID", field: "customerID", sortable: true },
	  { name: "RMSID", field: "rmID", sortable: true }
  ];
  let resultNum =0;

  useEffect(()=>{
       // console.log(response.data)
      setFetchExisted(props.RmsCustomers);

  },[props]);


	// console.log(props.RmsCustomers)
	const handleShow = (record) =>{ 
		let c =isFetchExisted.find((isFetchExisted) => isFetchExisted.id === record);
		console.log(c);
		return c;  
	  }

	  const commentsData2 = useMemo(() => {
		let computedComments = isFetchExisted;
		
		if (search) {
		
			 computedComments = computedComments.filter(comment =>comment.name.toLowerCase().includes(search) 
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
	
	if(computedComments.length > 0){
	  return computedComments.slice((currentPage - 1) * ITEMS_PER_PAGE,(currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);
	}
	else{
	  return computedComments.data;
	}
	   
	}, [isFetchExisted,currentPage,search,sorting]);
	return (
	<>
	 <div className="row my-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
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
  commentsData2.map((result) => {
      return <tr key={result.id}>
		  <td>{resultNum++}</td>
          <td>{result.name}</td>
          <td>{result.customerID}</td>
          <td>{result.rmID}</td>
          <td className="text-right">
          <Button variant="primary" onClick={() => handleShow(result.id)}>
          Change RMS
</Button>
                         
              </td>
      </tr>
  })
  }
                              
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100">
            <div className="card-body p-3">
			<ul className="list-group">
                <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">Oliver Liam</h6>
                    <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
                    <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
                    <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    {/* <a className="btn btn-link text-danger text-gradient px-3 mb-0" ><i className="far fa-trash-alt me-2"></i>Delete</a>
                    <a className="btn btn-link text-dark px-3 mb-0" ><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a> */}
                  </div>
                </li>
              
              </ul>




            </div>
          </div>
        </div>
      </div>
	</>
        
);
}

export default RMScostomerList;