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
// 给每个React.lazy()组件添加Suspense
const wrapComponent = (WrappedComponent) => () => (
	<Suspense fallback={ <Loading /> }>
		<WrappedComponent />
	</Suspense>
)
//tabBar页面,/home和/home/user不用react.lazy(),会闪烁
const TabRouter = () => (
	<HomePageLayout>
		<Switch>
			<Route path={ '/home' } exact component={ Home } />
			<Route path={ '/home/user' } component={ User } />
		</Switch>
	</HomePageLayout>
)
// /home页面进入的子页面
const HomePage = () => (
	<Switch>
		<Route path={ '/homePage/benefit' } component={ Benefit } />
	</Switch>
)
// /user页面进入的子页面
const UserPage = () => (
	<Switch>
		<Route path={ '/userPage/policy' } component={ Policy } />
	</Switch>
)

const tRouter = () => (
	<Switch>
		<Route path={ '/login' } component={ Login } />
		<Route path={ '/homePage' } component={ HomePage } />
		<Route path={ '/userPage' } component={ UserPage } />
	</Switch>
)

//过滤路由前进和后退的时候添加不同的className
const ACTION_MAP = {
	PUSH: 'forward',
	POP: 'back'
}

//在所有路由最外层加上动画,根据history.action来区分前进后退,展示不同的动画
/*
*  1
* old : exit exit-active
* new : enter enter-active
*  2
* old : 移除
* new : enter-done
*
*   tab页面需要单独处理.tab切换的时候不做动画处理
* */
const TransRouter = withRouter(({ location, history }) => {
	const { pathname } = location
	return (
		<TransitionGroup
			className={ 'router-wrapper' }
			childFactory={ child => React.cloneElement(child, {
				classNames:
					pathname === '/home' || pathname === '/home/user' ?
						`Tab-${ ACTION_MAP[history.action] }` :
						ACTION_MAP[history.action]
			}) }>
			<CSSTransition
				timeout={ pathname === '/home' || pathname === '/home/user' ? 0 : 300 }
				key={ pathname } appear={ true }>
				<div>
					<Switch location={ location }>
						<Route path={ '/home' } component={ wrapComponent(TabRouter) } />
						<Route path={ '/' } exact component={ wrapComponent(tRouter) } />
						<Redirect to={ '/home' } />
					</Switch>
				</div>
			</CSSTransition>
		</TransitionGroup>
	)
})


const AppRouter = () => (
	<Router history={ history }>
		<TransRouter />
	</Router>
)
export default AppRouter
