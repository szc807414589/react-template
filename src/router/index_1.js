import React, { Suspense } from 'react'
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import HomePageLayout from '../layouts/HomePage'
import history from "../history"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './style.less'

const Home = React.lazy(() => import('../pages/home/index'))
const Benefit = React.lazy(() => import('../pages/home/benefit'))
const Login = React.lazy(() => import('../pages/login'))
const Policy = React.lazy(() => import('../pages/user/policy'))


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
			<Route path={ '/userPage/policy' } component={ React.lazy(() => import('../pages/user/policy')) } />
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


let oldPathName = null
const TransRouter = withRouter(({ location, history }) => {
	console.log(history)
	const { pathname } = location


	oldPathName = pathname
	return (
		<TransitionGroup
			className={ 'router-wrapper' }
			childFactory={ child => React.cloneElement(
				child,
				{ classNames: pathname === '/home' || pathname === '/home/user' ? `Tab-${ ACTION_MAP[history.action] }` : ACTION_MAP[history.action] }
				//{ classNames: ACTION_MAP[history.action] }
			) }
		>
			<CSSTransition
				timeout={ 10000 }
				// timeout={ pathname === '/home' || pathname === '/home/user' ? 0 : 10000 }
				// key={ pathname }
				appear={ true }
				mountOnEnter={true}
				in={ pathname !== '/home' || pathname !== '/home/user' }
				addEndListener={(node, done) => {
					// debugger
					console.log(node.children[0].className)
				}}
			>
				<div>
					<Suspense fallback={ <Loading /> }>
						<Switch location={ location }>
							<Route path={ '/login' } component={ Login } />
							<Route path={ '/homePage/benefit' } component={ Benefit } />
							<Route path={ '/userPage/policy' } component={ Policy } />
							<Route path={ '/' } component={ TabRouter } />
							{/*<Redirect path={ '/' } to={ '/home' } />*/ }
						</Switch>
					</Suspense>
				</div>
			</CSSTransition>
		</TransitionGroup>
	)
})
/*
*
*  1
* old : exit exit-active
* new : enter enter-active
*  2
* old : 移除
* new : enter-done
*
*   tab页面需要单独处理.tab切换的时候不做动画处理
*
*
*
*
* */
const ROUTER = () => (
	<Suspense fallback={ <Loading /> }>
		<Switch>
			<Route path={ '/home' } component={ TabRouter } />
			<Route path={ '/' } component={ TransRouter } />
		</Switch>
	</Suspense>
)

const AppRouter1 = () => (
	<Router history={ history }>
		<TransRouter />
	</Router>
)
export default AppRouter1
