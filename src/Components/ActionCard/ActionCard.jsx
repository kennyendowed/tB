import React,{ useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import "./ActionCard.css"


function ActionCard( {value, title,icon,update} ) {
 
  const newVar = (value) ? value : '0';
  
  return (
    <div>
        <div className="card action"  >
            <div className="card-body card-body-b p-3 ">
              <div className="row">
                <div className="col-8 ">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold ProvidusBankprimary-text">{title}</p>
                    <p className=" font-weight-light font-size-2px action-text mb-0">
                      {newVar || <Skeleton />}
                      {/* <span className="text-success text-sm font-weight-bolder">+55%</span> */}
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-ProvidusBankprimary shadow text-center border-radius-md actionlogo">
                    <i className={`${icon} text-lg opacity-10`} aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    </div>
  );
}

export default ActionCard;
