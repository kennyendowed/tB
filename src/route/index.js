import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
// import { Navigate, Routes, Route, Router } from "react-router-dom";
// import RouteGuard from "../core/utils/RouteGuard"

// //history
// import { history } from '../core/utils/helpers/history';

//pages
import ProtectedRoutes from "../Components/AuthGuard/ProtectedRoutes.jsx"
import PublicRoutes from "../Components/AuthGuard/PublicRoutes";
import PermissionDenied from "../views/PermissionDenied";
import InnerContent from "../Components/InnerContent";
import DashboardPage from "../views/dashboard";
import SettingsPage from "../views/settings";
import AddFunds from "../Components/Pages/AddFunds";
import TransferFunds from "../Components/Pages/TransferFunds";
import Transactions from "../Components/Pages/Transactions";
import LoginPage from "../views/authentication";
// import BatchApproval from "../Components/Pages/BatchApproval";

//router routes
import WelcomePage from "../views/welcome";
import About from "../views/about";
import Contact from "../views/contact";
import Faq from "../views/faq";


const MainRoutes = () => (
	<Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}
		<Route path="/dashboard" element={<DashboardPage />} />
		<Route path = "/addFunds" element ={<AddFunds/>}/>
		<Route path = "/transferFunds" element ={<TransferFunds/>}/>
		<Route path = "/Transactions" element ={<Transactions/>}/>
		<Route path="/settings" element={<SettingsPage />} >
				  <Route path="/settings/update-Profile" element={<SettingsPage />} /> 
				  <Route path="/settings/update-Password" element={<SettingsPage />} /> 
				</Route> 
				
		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
				{/* <Route path="/dashboard" element={<DashboardPage />} >
				  <Route path="/dashboard/treated" element={<DashboardPage />} /> 
				</Route> */}
				{/* <Route path = "/addFunds" element ={<addFunds/>}/> */}
				{/* <Route path = "/Treatedrequests" element ={<TreatedRequest/>}/>
				<Route path = "/Reports" element ={<Reports/>}/>
				<Route path = "/BatchApproval" element ={<BatchApproval/>}/>  */}
			</Route>
			</Route>
	

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		<Route  element={<PublicRoutes />}>
		<Route path="/welcome" element={<WelcomePage />} />
		<Route path="/aboutUs" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/faq" element={<Faq />} />

		</Route>
		

		<Route path="auth" element={<PublicRoutes />}>
			<Route path="/auth" element={<LoginPage />} />
			<Route path="register" element={<LoginPage />} />
		</Route>

		{/** Permission denied route */}
		<Route path="/denied" element={<PermissionDenied />} />
	</Routes>
)

export default MainRoutes

