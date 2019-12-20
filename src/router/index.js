import React, { Suspense } from "react"
import {
	// BrowserRouter,
	Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom"
import './style.less'
import { routesConfig } from './config'
import history from '../history'

// const ANIMATION_MAP = {
// 	PUSH: 'page',
// 	POP: 'back'
// }
const Loading = () => {
	return (
		<>Loading...</>
	)
}

// Support pass props from layout to child routes
const RouteWithProps = ({ path, exact, strict, render, location, ...rest }) => (
	<Route
		path={ path }
		exact={ exact }
		strict={ strict }
		location={ location }
		render={ props => render({ ...props, ...rest }) }
	/>
)

//递归展开 routesConfig
const renderRouter = (routes, switchProps = {}) => {
	return routes ? (
		<Switch { ...switchProps }>
			{
				routes.map((route, i) => {
					//如果有重定向
					if (route.redirect) {
						return (
							<Redirect
								key={ route.key || i }
								from={ route.path }
								to={ route.redirect }
								exact={ route.exact }
								strict={ route.strict }
							/>
						)
					}

					//如果有子路由,就渲染子路由,如果没有,就直接渲染
					return (
						<RouteWithProps
							key={ `${ route.path }_${ i }` }
							path={ route.path }
							exact={ route.exact }
							strict={ route.strict }
							render={ props => {
								const childRoutes = renderRouter(
									route.routes,
									{ location: props.location }
								)
								if (route.component) {
									return (
										<route.component>
											{ childRoutes }
										</route.component>
									)
								} else {
									return childRoutes
								}
							} }
						/>
					)
				})
			}
		</Switch>
	) : null

}

const TransRouter = () => {
	console.log(renderRouter(routesConfig))
	return (
		<Suspense fallback={ <Loading /> }>
			{ renderRouter(routesConfig) }
		</Suspense>
	)
}
const AppRouter = () => (
	<Router history={ history }>

		<TransRouter />
	</Router>
)

export default AppRouter


