import React, { Suspense } from "react"
import {
	Switch,
	Route,
	Redirect
} from "react-router-dom"

const Loading = () => {
	return (
		<div>Loading...</div>
	)
}
// 给每个React.lazy()组件添加Suspense
const wrapComponent = (WrappedComponent) => () => (
	<React.Suspense fallback={ <Loading /> }>
		<WrappedComponent />
	</React.Suspense>
)
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
						<Suspense fallback={ <Loading /> }
						          key={ `${ route.path }_${ i }` }>
							<Route

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
						</Suspense>
					)
				})
			}
		</Switch>
	) : null

}

export default renderRouter
