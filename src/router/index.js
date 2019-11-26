import React, {Suspense, useState} from "react"
import {CSSTransition} from "react-transition-group"
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"
import './style.less'
import {routesConfig} from './config'
import BasicLayout from '../layouts/BasicLayout'

const Loading = () => {
	return (
		<div>Loading...</div>
	)
}
//lazy 引入
const AsyncComponent = importComponent => {
	const Component = React.lazy(importComponent)
	return (
		<Suspense fallback={<Loading />}>
			<div className={"page"}>
				<Component />
			</div>
		</Suspense>
	)
}
//递归展开 routesConfig
const configRecursive = (routesConfig) => {
	return routesConfig.map((route, i) => {
		if (route.routes && route.routes.length > 0) {
			return configRecursive(route.routes)
		}
		return (
			<Route
				key={`${route.path}_${i}`}
				path={route.path}
				exact={route.exact}
			>
				{({match}) => (
					<CSSTransition
						in={match != null}
						timeout={300}
						classNames="page"
						unmountOnExit
					>
						<div className="page">
							{AsyncComponent(route.component)}
						</div>
					</CSSTransition>
				)}
			</Route>
		)
	})

}

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Suspense fallback={<Loading/>}>
					<BasicLayout className={"container"}>
						{
							configRecursive(routesConfig)
						}
					</BasicLayout>
				</Suspense>
			</Switch>
		</Router>

	)
}

export default AppRouter


