import React, { useEffect, useState, useCallback } from 'react'
import useUser from '@store/useUser'
import useRoutes from '@configs/useRoutes.config'
import { isArray } from '@utils/checkType'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import AppContext from '@context/AppContext'
import { create, createStore } from 'zustand'
import Home from '@views/Home'
const App = () => {
	const navigate = useNavigate()
	const { routes } = useRoutes()
	const { token } = useUser()
	const [ready, setReady] = useState(false) // set after
	// const renderRoute = (routes) => routes.map(route => (
	// 	'children' in route ?
	// 		<Route {...route}>{renderRoute(route.children)}</Route> :
	// 		<Route {...route} />
	// ))
	// useEffect(() => {
	// 	token ? setReady(true) : navigate('/login')
	// 	setReady(true)
	// }, [])
	return (
		<>
			<Home />
		</>
	)
}

export default () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)