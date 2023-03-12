import React, { useEffect, useState, createContext, useMemo } from "react";
import "./SettingsPage.css";
import LoadingLogo from "../../Components/LoadingLogo";
import {useLocation} from "react-router-dom";
import UpdateProfile from "../../Components/Forms/UpdateProfile";
import UpdatePassword from "../../Components/Forms/UpdatePassword";



const SettingsPage = (props) => {
    const location = useLocation()
    return (

        <>

<div class="col-md-9 col-xl-10">




<div class="card">
    <div class="card-header">
  
        <h5 class="card-title mb-0">Private info</h5>
    </div>
    <div class="card-body">
    {location.pathname === "/settings/update-Profile" ? (
						         <UpdateProfile />
						         ): ( 
                                    <UpdatePassword />
                       )}
    </div>
</div>


</div>




        </>
    );
}


export default SettingsPage;