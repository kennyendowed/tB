import React from "react";
import "./Header.css";
import { Navbar,Onheader } from "../..";
import {useAuthContext} from"../../../core/modules";


function Header() {
  const { currentUser } = useAuthContext();
  return   (
<>
     {currentUser ?(
      <div>
         <Navbar />
   
      </div>

           ):(
       <Onheader /> 
       )} 
</>
  );
 
}

export default Header;
