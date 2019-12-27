import React, { Suspense } from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

const Loading = () =>
    <div>Loading...</div>;


// 给每个React.lazy()组件添加Suspense
const wrapComponent = WrappedComponent => () => (
    <React.Suspense fallback={ <Loading /> }>
        <WrappedComponent />
    </React.Suspense>
);

//递归展开 routesConfig
const renderRouter = (routes, switchProps = {}) => (routes ? (
    <Switch { ...switchProps }>
        {
            routes.map((route, i) => {
                //如果有重定向
                if (route.redirect) {
                    return (
                        <Redirect
                            key={ route.key || i }
                            exact={ route.exact }
                            from={ route.path }
                            strict={ route.strict }
                            to={ route.redirect }
                        />
                    );
                }

                //如果有子路由,就渲染子路由,如果没有,就直接渲染
                return (
                    <Suspense
                        key={ `${ route.path }_${ i }` }
						          fallback={ <Loading /> }
                    >
                        <Route
                            exact={ route.exact }
                            path={ route.path }
                            render={
                                props => {
                                    const childRoutes = renderRouter(
                                        route.routes,
                                        { location: props.location },
                                    );
                                    if (route.component) {
                                        return (
                                            <route.component>
                                                { childRoutes }
                                            </route.component>
                                        );
                                    }
                                    return childRoutes;
                                }
                            }
                        />
                    </Suspense>
                );
            })
        }
    </Switch>
) : null);

export default renderRouter;
