import React, { useEffect, useState, createContext, useMemo } from "react";
import "./UpdatePassword.css";
import LoadingLogo from "../../../Components/LoadingLogo";





const UpdatePassword = (props) => {

    return (

        <>
      
      <form>
                                <div className="mb-3">
                                    <label for="inputPasswordCurrent">Current password</label>
                                    <input type="password" className="form-control" id="inputPasswordCurrent" />
                                    <small><a href="#">Forgot your password?</a></small>
                                </div>
                                <div className="mb-3">
                                    <label for="inputPasswordNew">New password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew" />
                                </div>
                                <div className="mb-3">
                                    <label for="inputPasswordNew2">Verify password</label>
                                    <input type="password" className="form-control" id="inputPasswordNew2" />
                                </div>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>


        </>
    );
}


export default UpdatePassword