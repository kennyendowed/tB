import React from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {
	//get item from localstorage

	let user

	const _user = localStorage.getItem("user")

	if (_user) {
		user = JSON.parse(_user)
	}
	if (user) {
		return {
			auth: true,
			role: user.roleaccess,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}


const ProtectedRoutes = () => {
	const {auth, role} = useAuth()


	//if the role required is there or not
	if (role) {
		const roles = role.split(',');
			
		return auth ? (
			roles.includes('ICU' ) || 	roles.includes('GH' ) || roles.includes('HRM' ) || roles.includes('fincon' ) ? (
				<Outlet />
			) : (
				<Navigate to="/denied" />
			)
		
		) : (
			<Navigate to="/welcome" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/welcome" />
	}
}

export default ProtectedRoutes

