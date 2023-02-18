import "./ReassignRMFileUpload.css";
import React, { useState } from "react"
import { TableHeader, Pagination, Search } from "../../DataTable";
import axios from "axios";
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";
import { useRecordStatusContext } from "../../../core/modules";
import LoadingSpinner from "../../../Components/spinner";
import Progress from '../../../Components/ProgressBar';

const headers = [
  { name: "No#", field: "id", sortable: false },
  { name: "Branch Code", field: "bra_code", sortable: true },
  { name: "Customer Number", field: "cus_num", sortable: true },
  { name: "Mapped Account", field: "accountNumber", sortable: true },
  // { name: "Unit", field: "unit", sortable: false },
  { name: "Exited RM Code", field: "oldRMcODE", sortable: false },
  { name: "New RM Code", field: "newRMcode", sortable: false },
  { name: "Status", field: "RequestStatus", sortable: false }
];
const API_URL2 = process.env.REACT_APP_BaseApi_URL;
function ReassignRMFileUpload(){
    const [file, setFile] = useState('');
    const [reason, setReason] = useState("");
    const [ADcomments, setADcomments] = useState("");
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState([]);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isButtonSubmitted , setisSubmitted] =useState(false);
    const [isDoneSubmitted  , setisDoneSubmitted] =useState(false);
    const [isUnverify  , setisUnverify] =useState(false);
    const { isFetchExisted,fetchResult} = useRecordStatusContext();
    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      };
      const enabled =
      reason.length > 0 &&
      ADcomments.length > 0;
      const onFileSubmit = async e => {
        e.preventDefault();
        setisSubmitted(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('RequestType', 'true');
        formData.append('reason', reason);
        formData.append('ADcomments', ADcomments);
        const user = JSON.parse(localStorage.getItem("token"));
        try {
          const res = await axios.post(API_URL2 + '/ReassignRequest', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Authorization": user
            },
            onUploadProgress: progressEvent => {
              setUploadPercentage(
                parseInt(
                  Math.round((progressEvent.loaded * 100) / progressEvent.total)
                )
              );
            }
          });
          // console.log(res.data)
    
          if (res.data.code === 200) {
          
            setisDoneSubmitted(true)
            let Msg = () => (
              <div>
                <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {res.data.message} </p>
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
            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
    
            const { fileName, filePath } = res.data;
            setisUnverify(res.data.unVerify);
            setUploadedFile({ fileName, filePath });
            
          }
          await fetchResult();
          setUploadedFile([])
          // setMessage('File Uploaded');
          setisSubmitted(false);
        } catch (err) {
          setisSubmitted(false);
             // console.log(err)
          setUploadedFile([])
          if (typeof err.response.data.data != 'string') {
            // for (let err in  err.response.data.data) {
            // console.log(err.response.data.data[0]);
            let Msg = () => (
              <div>
                <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {err.response.data.data[0].message} </p>
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
            // this._globals.toastAlert( ex.response.data.error.data[0].message, 'error');
            // }
          }
          setUploadPercentage(0)
        }
      };

    return (
        <>
          <div className="row my-4">

       
          <div className="col-md-6">
        <div className="card h-100">
 <Progress percentage={uploadPercentage} />
 <div className="card-body p-3">
                  <form onSubmit={onFileSubmit}>
                    {/* <div className="ms-md-auto pe-md-0 d-flex align-items-center"> */}
                    <div className="mb-3">
                    {/* <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                      </label> */}
                      <input
                        type="file"
                        // onChange={(e) => setFile(e.target.files[0])}
                        // id='customFile'
                        onChange={onChange}
                        placeholder="Click to select excel doc here..."
                        className="form-control" required
                      />
                    
                      {/* <p>{errors.files?.message}</p><br />  */}
                      </div>
                 
                  <label>SELECT REASON</label>
              <div className="mb-3">
                <select
                    value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="form-control" required
                >
                   <option value=' '>-----o	Select an option-----</option>
                  <option value="RM change request"> o	RM change request</option>
                  <option value="Staff Not Active"> o	Staff Not Active</option>
                  <option value="Staff Termination"> o	Staff Termination</option>
                  <option value="Staff Resignation">o	Staff Resignation </option>

                </select>
              </div>
              {/* {errors.reason && <p style={{color:'red'}}> {errors.reason.message}</p> } */}
                  
              <label>Additional Comment*</label>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={ADcomments}
                  onChange={(e) => setADcomments(e.target.value)}
                  className="form-control"
                  placeholder="Additional Comment*"
              
                />
              </div>
              
              {/* <p>{errors.ADcomments?.message}</p> */}
                      {/* {uploadedFile.length === 0 ? ( */}
                      {!isDoneSubmitted ? (
                        <div className="text-center"> 
                      {!isButtonSubmitted ? (
                        <button type="submit" className="btn btn-lg  bg-gradient-info mt-1 m-1 mb-0" disabled={!enabled} >Upload</button>
                      ) : (
                        <button
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                          disabled
                        >
                          <LoadingSpinner />   PROCESSING...
                        </button>
                      )
                      }

                      </div>

                      ) :(
  <button
  className="btn bg-gradient-info w-100 mt-4 mb-0"
  disabled
>
Done PROCESSING...  
</button>
 )
              
              
}
                  </form>
                </div>
                </div>
                </div>

                <div className="col-md-6">
                  <h4> List of Failed uploaded record</h4>
                <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <TableHeader
                                        headers={headers}
                                      
                                    />                       
                                    <tbody >
                                    { isUnverify ? (                                      
                                            isUnverify.map((result, index) => {
                                                return <tr key={result.id}>
                                                    <td style={{marginLeft:"900px"}}>{index}</td>
                                                    <td>{result.bra_code}</td>
                                                    <td>{result.cus_num}</td>
                                                    <td>{result.accountNumber}</td>
                                                    {/* <td>{result.unit}</td> */}
                                                    <td>{result.oldRMcODE}</td>
                                                    <td>{result.newRMcode}</td>
                                                    <td>Invalid Rm Code</td>
                                                  
                                             
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


                            </div>
                  </div>
        </>
    )
}

export default ReassignRMFileUpload;