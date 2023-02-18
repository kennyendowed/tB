import "./RMPendingRequestDetails.css";
import React, { useEffect, useState, useMemo } from "react";
import { useRecordStatusContext } from "../../../core/modules";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from "../../../assets/img/logos/providus-logo.svg";
import ReassignRequestService from "../../../core/services/dashboard.service";
import LoadingSpinner from "../../../Components/spinner";
import dashboardService from "../../../core/services/dashboard.service";


function RMPendingRequestDetails({ RmsCustomers,updateSET }) {
  const { id, accountNumber, reason, oldRMcODE, newRMcode,cus_Email, ADcomments,bra_code, cus_num,NewRm_Email,index} = RmsCustomers;
  const [shouldHide, setShouldHideState] = useState(true);
  const [setsid, setID] = useState(id);
  const [ActionRequest, setActionRequest] = useState("");
  const [Comments, setADcomments] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
const [ isCheck ,setisCheck] =useState(false);
const [isDoneSubmitted  , setisDoneSubmitted] =useState(false);
const enabled =Comments.length > 0;
const { isFetchExisted,fetchResult} = useRecordStatusContext();
useEffect(()=>{

  if(  NewRm_Email === '0' || cus_Email === '0'){

    var arData = {
      acct_mgr: newRMcode,
      branch_code:bra_code,
      accountNumber:accountNumber,
      NewRm_Email:NewRm_Email,
      cus_Email:cus_Email
    }
    dashboardService.validateANDUpdateRM(arData).then(
      (response) => {
         
      console.log(response.data)
  },
    );
  }
}, []);

  const chnageSelect = (record) => {
    if (record === "Decline") {
      setisCheck(true)
      setShouldHideState(false)
      setActionRequest(record)
    }
    else {
      setisCheck(true)
      setShouldHideState(true)
      setActionRequest(record)
    }

  }
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    setisSubmitting(true)
    var Newdata = {

      id: setsid,
      ActionRequest: ActionRequest,
      reason:( Comments) ? Comments : "Please contact fincon for reasons as no reason was provided"
    }
    try {
    //  return new Promise((resolve) => {
        // setTimeout(() => {
        //  resolve();
          ReassignRequestService.ActionRequest(Newdata).then(
            (response) => {
              if (response.status === "TRUE") {
                setisDoneSubmitted(true)
                let Msg = () => (
                  <div>
                    <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                    <p> {response.data} </p>
                  </div>
                )
                updateSET(index); 
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
              else {
                setisSubmitting(false)
                // navigate("/dashboard");
                let Msg = () => (
                  <div>
                    <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                    <p> {response.data} </p>
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
              setisSubmitting(false)
            },
            (ex) => {

              setisSubmitting(false)
              if (typeof ex.response.data.data != 'string') {
                if (ex.response.status === 404) {
                  let Msg = () => (
                    <div>
                      <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                      <p> {ex.response.data.error.message} </p>
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
                else {
                  // console.log(err);
                  let Msg = () => (
                    <div>
                      <img src={logo} className="toaster-brand-img h-100" alt="main_logo" />
                      <p> {ex.response.data.data[0].message} </p>
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

              // console.log(ex.response.data.data[0].message);
            }
          );
          await fetchResult();
      //  }, 2000);
        
     // });
    
    } catch (ex) {
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
   
  };


  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card h-100">
          <div className="card-body p-3">
            <ul className="list-group">
              <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                <div className="d-flex flex-column">

                  <span className="mb-1 text-xs">CUSTOMER ACCOUNT NUMBER: <span className="text-dark font-weight-bold ms-sm-2">{accountNumber}</span></span>
                  <span className="mb-1 text-xs">REASONS: <span className="text-dark ms-sm-2 font-weight-bold">{reason}</span></span>
                  <span className="mb-1 text-xs">OLD RM CODE: <span className="text-dark ms-sm-2 font-weight-bold">{oldRMcODE}</span></span>
                  <span className="mb-1 text-xs">NEW RM CODE: <span className="text-dark ms-sm-2 font-weight-bold">{newRMcode}</span></span>
                  <span className="mb-1 text-xs">COMMENTS: <span className="text-dark ms-sm-2 font-weight-bold">{ADcomments}</span></span>
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
            <form onSubmit={onSubmit}>
              <input type="hidden" name='id'
                value={setsid}
                onChange={(e) => setID(e.target.value)}

              />
              {/* <input type="text" name='id'
                  value={cname}
                  onChange={(e) => setCName(e.target.value)}
                  
                  /> */}
              <label>SELECT ACTION</label>
              <div className="mb-3">
                <select
                  name="reason"
                  onChange={(e) => chnageSelect(e.target.value)}
                  className="form-control" required
                >
                  <option value=' '>-----o	Select an option-----</option>
                  <option value="Approve"> o	Approve request</option>
                  <option value="Decline"> o	Decline request</option>

                </select>
              </div>
              {/* {errors.reason && <p style={{color:'red'}}> {errors.reason.message}</p> } */}
              <div className={shouldHide ? 'hidden' : ""}>
                <label>Additional Comment*</label>
                <div className="mb-3">
                  <textarea
                    type="text"
                    name="ADcomments"
                    className="form-control"
                    placeholder="Additional Comment*"
                    value={Comments}
                    onChange={(e) => setADcomments(e.target.value)}
                  />
                </div>
                {/* <p>{errors.ADcomments?.message}</p> */}
              </div>
              {!isDoneSubmitted ? (

              <div className="text-center">
                {!isSubmitting ? (
                  <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0" disabled={!isCheck } >Submit</button>
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





    </>

  );
}

export default RMPendingRequestDetails;