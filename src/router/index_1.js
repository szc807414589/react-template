import React, { Suspense } from 'react'
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import HomePageLayout from '../layouts/HomePage'
import history from "../history"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Login from '../pages/login'
import Home from '../pages/home/index'
import Benifi from '../pages/home/benefit'

import './style.less'

const Loading = () => {
	return (
		<div>Loading...</div>
	)
}
const TabRouter = () => {
	return (
		<HomePageLayout>
			<Switch>
				{/*<Redirect path={'/'} to={'/home'}/>*/ }
				<Route path={ '/home' } exact
				       component={ React.lazy(() => import('../pages/home/index')) } />
				<Route path={ '/home/user' } exact
				       component={ React.lazy(() => import('../pages/user/index')) } />
			</Switch>
		</HomePageLayout>
	)
}
const HomePage = () => {
	return (
		<Switch>
			<Route
				path={ '/homePage/benefit' } exact
				component={ React.lazy(() => import('../pages/home/benefit')) } />
		</Switch>
	)
}
const UserPage = () => {
	return (
		<Switch>
			<Route
				path={ '/userPage/policy' }
				component={ React.lazy(() => import('../pages/user/policy')) } />

		</Switch>
	)
}
const AppRouter = () => {
	return (
		<Router history={ history }>
			<Suspense fallback={ <Loading /> }>
				<Switch>
					<Route path={ '/login' } component={ React.lazy(() => import('../pages/login')) } />
					<Route path={ '/homePage' } component={ HomePage } />
					<Route path={ '/userPage' } component={ UserPage } />
					<Route path={ '/home' } component={ TabRouter } />
					<Redirect path={ '/' } to={ '/home' } />
				</Switch>
			</Suspense>
		</Router>
	)
}


const ACTION_MAP = {
	PUSH: 'forward',
	POP: 'back'
}
const TransRouter = withRouter(({ location, history }) => (
	//<Suspense fallback={ <Loading /> }>
	<TransitionGroup
		className={ 'router-wrapper' }
		childFactory={ child => React.cloneElement(
			child,
			{ classNames: ACTION_MAP[history.action] }
		) }
	>
		<CSSTransition
			timeout={ 500 }
			key={ location.pathname }
			// appear={ true }
		>
			<Switch location={ location }>
				<Route path={ '/login' }
				       component={Login
					       // React.lazy(() =>
						   //     import('../pages/login')
					       // )
				       } />
				<Route path={ '/home' }
				       component={Home
					       // React.lazy(() =>
						   //     import('../pages/home/index')
					       // )
				       } />
				<Route path={ '/homePage/benefit' }
				       component={Benifi
					       // React.lazy(() =>
						   //     import('../pages/home/benefit')
					       // )
				       } />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
	//</Suspense>
))

const AppRouter1 = () => (
	<Router history={ history }>
		<TransRouter />
	</Router>
)
export default AppRouter1
