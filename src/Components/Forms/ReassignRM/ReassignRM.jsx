import React, { useEffect, useState } from "react";
import "./ReassignRM.css";

function ReassignRM(props){
	const [isFetchExisted, setFetchExisted] = useState([]);

    useEffect(()=>{
        // console.log(response.data)
       setFetchExisted(props);
 
   },[props]);

    return (
        <>

        </>
    )
}

export default ReassignRM;