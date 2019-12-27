import React, { Suspense } from 'react';
import {
    Router, Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePageLayout from '../layouts/HomePage';
import history from '../history';
import Home from '../pages/home/index';
import User from '../pages/user/index';
import './style.less';
import { renderRouter } from './renderRouter';
import { routesConfig } from './config';

const Benefit = React.lazy(() => import('../pages/home/benefit/index'));
const Login = React.lazy(() => import('../pages/login'));
const Policy = React.lazy(() => import('../pages/user/policy'));


const Loading = () => <div>Loading...</div>;


// 给每个React.lazy()组件添加Suspense
const wrapComponent = WrappedComponent => () => (
    <Suspense fallback={ <Loading /> }>
        <WrappedComponent />
    </Suspense>
);

//tabBar页面,/home和/home/user不用react.lazy(),会闪烁
const TabRouter = () => (
    <HomePageLayout>
        <Switch>
            <Route
                exact
                component={ Home }
                path='/home'
            />
            <Route
                component={ User }
                path='/home/user'
            />
        </Switch>
    </HomePageLayout>
);

// /home页面进入的子页面
const HomePage = () => (
    <Switch>
        <Route
            component={ Benefit }
            path='/homePage/benefit'
        />
    </Switch>
);

// /user页面进入的子页面
const UserPage = () => (
    <Switch>
        <Route
            component={ Policy }
            path='/userPage/policy'
        />
    </Switch>
);

const tRouter = () => (
    <Switch>
        <Route
            component={ Login }
            path='/login'
        />
        <Route
            component={ HomePage }
            path='/homePage'
        />
        <Route
            component={ UserPage }
            path='/userPage'
        />
    </Switch>
);

//过滤路由前进和后退的时候添加不同的className
const ACTION_MAP = {
    PUSH: 'forward',
    POP : 'back',
};

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
    const { pathname } = location;
    return (
        <TransitionGroup
            childFactory={
                child => React.cloneElement(child, {
                    classNames:
						pathname === '/home' || pathname === '/home/user' ?
						    `Tab-${ ACTION_MAP[history.action] }` :
						    ACTION_MAP[history.action],
                })
            }
            className='router-wrapper'
        >
            <CSSTransition
                key={ pathname }
                appear
                timeout={ pathname === '/home' || pathname === '/home/user' ? 0 : 300 }
            >
                <div>
                   <Switch location={ location }>
                   <Route
                   component={ wrapComponent(TabRouter) }
                   path='/home'
                   />
                   <Route
                   component={ wrapComponent(tRouter) }
                   path='/'
                   />
                   <Redirect to='/home' />
                   </Switch>
                    {/*{ renderRouter(routesConfig, { location: location }) }*/}
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
});


const AppRouter = () => (
    <Router history={ history }>
        <TransRouter />
    </Router>
);
export default AppRouter;
