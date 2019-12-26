import React, { Suspense } from 'react'
import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import HomePageLayout from '../layouts/HomePage'
import history from "../history"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Home from '../pages/home/index'
import User from '../pages/user/index'
import './style.less'

const Benefit = React.lazy(() => import('../pages/home/benefit'))
const Login = React.lazy(() => import('../pages/login'))
const Policy = React.lazy(() => import('../pages/user/policy'))


const Loading = () => {
	return (
		<div>Loading...</div>
	)
}
//tabBar页面,/home和/home/user不用react.lazy(),会闪烁
const TabRouter = () => {
	return (
		<HomePageLayout>
			<Switch>
				<Route path={ '/home' } exact component={ Home } />
				<Route path={ '/home/user' } exact component={ User } />
			</Switch>
		</HomePageLayout>
	)
}
// /home页面进入的子页面
const HomePage = (className) => {
	return (
		<Switch>
			<Route
				path={ '/homePage/benefit' }
				component={ React.lazy(() => import('../pages/home/benefit')) } />
		</Switch>
	)
}
// /user页面进入的子页面
const UserPage = () => {
	return (
		<Switch>
			<Route path={ '/userPage/policy' } component={ React.lazy(() => import('../pages/user/policy')) } />
		</Switch>
	)
}

//过滤路由前进和后退的时候添加不同的class
const ACTION_MAP = {
	PUSH: 'forward',
	POP: 'back'
}
// 给每个React.lazy()组件添加Suspense
const wrapComponent = (WrappedComponent, className = 'forward') => () => (
	<div className={ className }>
		<Suspense fallback={ <Loading /> }>
			<WrappedComponent />
		</Suspense>
	</div>
)


const TransRouter = withRouter(({ location, history }) => {
	const { pathname } = location
	return (
		<TransitionGroup
			className={ 'router-wrapper' }
			childFactory={ child => React.cloneElement(
				child,
				{
					classNames: pathname === '/home' ||
					pathname === '/home/user' ? `Tab-${ ACTION_MAP[history.action] }` :
						ACTION_MAP[history.action]
				}
			) }>
			<CSSTransition
				timeout={ pathname === '/home' || pathname === '/home/user' ? 0 : 300 }
				key={ pathname }
				appear={ true }>
				<div>
					<Switch location={ location }>
						<Route path={ '/login' } component={ wrapComponent(Login, ACTION_MAP[history.action]) } />
						<Route path={ '/homePage/benefit' }
						       component={ wrapComponent(Benefit, ACTION_MAP[history.action]) } />
						<Route path={ '/userPage/policy' } component={ wrapComponent(Policy, ACTION_MAP[history.action]) } />

						<Route path={ '/' } component={ wrapComponent(TabRouter, ACTION_MAP[history.action]) } />
					</Switch>
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

const AppRouter1 = () => (
	<Router history={ history }>
		<TransRouter />
	</Router>
)
export default AppRouter1
