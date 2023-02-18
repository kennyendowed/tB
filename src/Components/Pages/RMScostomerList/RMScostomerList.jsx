import React, { useEffect, useState } from "react";
import "./RMScostomerList.css";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";
import { useRecordStatusContext } from "../../../core/modules";
import ReassignRequestService from "../../../core/services/dashboard.service";
import LoadingSpinner from "../../../Components/spinner";
import dashboardService from "../../../core/services/dashboard.service";


function RMScostomerList(props) {
  const [isFetchExisted, setFetchExisted] = useState([]);
  const [isFetchRMststaus, setFetchValidateRMCODE] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting, isDirty, isValid } } = useForm({ mode: "onChange" });
  const [isButtonSubmitted , setisSubmitted] =useState(false);
  const [isValidateSubmitted  , setisValidateSubmitted] =useState(false);
  const [reason, setReason] = useState("");
  const [isDoneSubmitted  , setisDoneSubmitted] =useState(false);
  const { isFetchResult,fetchResult} = useRecordStatusContext();

  const enabled =
  typeof isFetchRMststaus?.dataNEW !== "undefined" && reason.length;

 
  const handleKeyPress = (e) => {
  //  console.log(e.target.value.length)
    if(e.target.value.length >= 4){
      var arData = {
        acct_mgr: e.target.value,
        branch_code:isFetchExisted.customerAccountWithPadding?.BranchCode.substring(1)
      }
      setisValidateSubmitted(true);
      dashboardService.validateRM(arData).then(
        (response) => {
        
         var NewDATA ={
          PH:response.phone,
          dataNEW:response.data
         }
         // setFetchValidateRMCODE(response.data);
          setFetchValidateRMCODE(NewDATA);
          setisValidateSubmitted(false);
    }, 
    (ex) => {
      setisValidateSubmitted(false);
             console.log(ex );
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
    // if(event.key === 'Enter'){
    //   console.log(event)
    // }
  }
  useEffect(() => {
    // console.log(response.data)
    setFetchExisted(props.RmsCustomers);

  }, [props]);
  // const handleChange = (e) => {
  //   const _newUserData = {
  //     ...isFetchExisted,
  //   }
  //   _newUserData[e.target.name] = e.target.value
  //   console.log(_newUserData)
  //   // setNewUserData(_newUserData)
  // }
  const onSubmit = async (data) => {
   
    setisSubmitted(true);
    var CosRMEmail =isFetchRMststaus?.dataNEW[0]?.MGR_NAME.toLowerCase();
    var Newdata =  {
      accountNumber: isFetchExisted.customerInfo?.AccountNumber,
      oldRMcODE: isFetchExisted?.RMcode,
      cus_num: isFetchExisted.customerInfo?.CustomerID,
       NewRm_Email: CosRMEmail+"@providusbank.com",
       NewRm_ph: isFetchRMststaus?.PH,
       cus_Phone : (isFetchExisted.customerInfo?.Phone) ? isFetchExisted.customerInfo?.Phone :"undefined",
      cus_Email : (isFetchExisted.customerInfo?.EmailAddress) ? isFetchExisted.customerInfo?.EmailAddress.toLowerCase() :"undefined",
      Currency_code:isFetchExisted.customerAccountWithPadding?.CurrencyCode.substring(2),
      branc_code:isFetchExisted.customerAccountWithPadding?.BranchCode.substring(1),
      Ledger_code:isFetchExisted.customerAccountWithPadding?.LedgerCode.substring(1),
      SubAccount_code:isFetchExisted.customerAccountWithPadding?.SubAccountCode.substring(1),
      reason:data.reason,
      newRMcode:data.newRMcode,
      ADcomments:data.ADcomments
    }
   
    // console.log(data.username);
    try {
             ReassignRequestService.ReassignRequest(Newdata).then(
            (response) => {
              if(response.status=== "TRUE"){
                setisDoneSubmitted(true)
  let Msg = () => (
    <div>
       <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    <p> {  response.data} </p> 
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
              }
              else{
  // navigate("/dashboard");
  let Msg = () => (
    <div>
       <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
    <p> {  response.data} </p> 
    </div>
    )
  toast.warning(Msg, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
              }
              setisSubmitted(false); 
            },
            (ex) => {
            console.log(ex);
          
              if (typeof  ex.response.data.data != 'string') {
                for (let err in  ex.response.data.data) {
                // console.log(err);
                let Msg = () => (
                  <div>
                     <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                  <p> {   ex.response.data.data[0].message} </p> 
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
                }
              }
              setisSubmitted(false);
            // console.log(ex.response.data.data[0].message);
            }
          );
          await fetchResult();
    } catch (ex) {
    	       let Msg = () => (
                <div>
                   <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                <p> {  ex.message} </p> 
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


  };
  // console.log( isFetchRMststaus?.[0]?.MGR_NAME)
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card h-100">
          <div className="card-body p-3">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                <div className="d-flex flex-column">
                  <span className="mb-2 text-xs">CUSTOMER ACCOUNT NUMBER: <span className="text-dark font-weight-bold ms-sm-2">{isFetchExisted.customerInfo?.AccountNumber}</span></span>
                  <span className="mb-2 text-xs">CUSTOMER NAME: <span className="text-dark ms-sm-2 font-weight-bold">{isFetchExisted?.customerInfo?.AccountName}</span></span>
                  <span className="text-xs">OLD RM CODE: <span className="text-dark ms-sm-2 font-weight-bold">{isFetchExisted?.RMcode}</span></span>
                  <span className="text-xs">BRANCH CODE: <span className="text-dark ms-sm-2 font-weight-bold">{isFetchExisted.customerAccountWithPadding?.BranchCode.substring(1)}</span></span>
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
      <div className="col-lg-8 col-md-6">
        <div className="card h-100">
          <div className="card-body p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input
                  type="hidden"
                  name="AccountNumb"
                  placeholder="Account Numb"
                  value={isFetchExisted?.account_number}
                  {...register('AccountNumb', { required: "Account Number is required" })}
                  className="form-control"
               
                />
                  <input
                  type="hidden"
                  name="oldRMcode"
                  placeholder="Old Rm Code"
                  value={isFetchExisted?.rmID}
                  {...register('oldRMcode', { required: "Old RM code is required" })}
                  className="form-control"
               
                /> */}
                  <label>SELECT REASON</label>
              <div className="mb-3">
                <select
                   value={reason}
                   onChange={(e) => setReason(e.target.value)}
                   className="form-control" required
                  // name="reason"
                  // {...register('reason', { required: "reason is required" })}
                  // className="form-control" required
                >
                   <option value=' '>-----o	Select an option-----</option>
                  <option value="RM change request"> o	RM change request</option>
                  <option value="Staff Not Active"> o	Staff Not Active</option>
                  <option value="Staff Termination"> o	Staff Termination</option>
                  <option value="Staff Resignation">o	Staff Resignation </option>

                </select>
              </div>
              {errors.reason && <p style={{color:'red'}}> {errors.reason.message}</p> }
              <label>NEW RM CODE</label>
              <div className="mb-3">
                <input
                  type="text"
                  name="newRMcode"
                  placeholder="New Rm Code"
                  {...register('newRMcode', { required: "RM code is required", pattern: { value: /^[0-9]+$/, message: "Please Type  Number" } })}
                  className="form-control"
                  onKeyUp={handleKeyPress}
                />
              </div>
              {!isValidateSubmitted ? (
                   (typeof  isFetchRMststaus?.dataNEW === "undefined") ? "Please provide a valid Rm Code in the same  department and branch with costomer ⛔️" : " Rm  👉️"+isFetchRMststaus?.dataNEW[0]?.MGR_NAME.toLowerCase()+" is active ✅"

                     ) : (
                   
                         <LoadingSpinner />  
        
                     )
                     }
              <p>{errors.newRMcode?.message}</p>
            
              <label>Additional Comment*</label>
              <div className="mb-3">
                <textarea
                  type="text"
                  name="ADcomments"
                  className="form-control"
                  placeholder="Additional Comment*"
                  {...register('ADcomments', { required: "Additional Comment is required" })}
                />
              </div>
              <p>{errors.ADcomments?.message}</p>
              {!isDoneSubmitted ? (

             
              <div className="text-center">

              {!isButtonSubmitted ? (
                      <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0"  disabled={!isDirty || !isValid || !enabled}>Submit</button>
                      ) : (
                        <button
                          className="btn bg-gradient-info w-100 mt-4 mb-0"
                          disabled
                        >
                      PROCESSING...   <LoadingSpinner />  
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





    </>

  );
}

export default RMScostomerList;