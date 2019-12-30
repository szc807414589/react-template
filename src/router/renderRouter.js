import React from 'react';
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

//递归展开 routesConfig  component 和 routes 不会共存
export const renderRouter = (routes, switchProps = {}) =>
    (routes ? (
        <Switch { ...switchProps }>
            {
                routes.map((route, i) => {
                    //如果有重定向
                    if (route.redirect) {
	                    return (
                            <Redirect
                                key={ route.path || i }
                                exact={ route.exact }
                                from={ route.path }
                                strict={ route.strict }
                                to={ route.to }
                            />
                        );
                    }
                    if (route.routes) {
                        if (route.component) {
                            return (
                                <Route
                                    key={ route.path || i }
                                    component={ route.component }
                                    exact={ route.exact }
                                    path={ route.path }
                                    strict={ route.strict }
                                >
                                    <route.component>
                                        { renderRouter(route.routes) }
                                    </route.component>
                                </Route>

                            );
                        }
                        return (
                            <Route
                                key={ route.path || i }
                                component={ route.component }
                                exact={ route.exact }
                                path={ route.path }
                                strict={ route.strict }
                            >
                                { renderRouter(route.routes) }
                            </Route>
                        );

                    }
                    return (
                        <Route
                            key={ route.path || i }
                            component={ wrapComponent(route.component) }
                            exact={ route.exact }
                            path={ route.path }
                            strict={ route.strict }
                        />
                    );
                })
            }
        </Switch>
    ) : null);
