import React from "react";
import "./Header.css";
import { Navbar,Onheader } from "../..";
import {useAuthContext} from"../../../core/modules";
import ActionCard from "../../ActionCard/ActionCard";
import Actionbar from "../Actionbar/Actionbar";

function Header() {
  const { currentUser } = useAuthContext();
  return   (
<>
     {currentUser ?(
      <div>
         <Navbar />
         <Actionbar />
      </div>

           ):(
       <Onheader /> 
       )} 
</>
  );
 
}

export default Header;
