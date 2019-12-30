import React from 'react';
import HomePageLayout from '../layouts/HomePage';
import Home from '../pages/home/index';
import User from '../pages/user/index';

// import Benefit from '../pages/home/benefit';
// import Login from '../pages/login/index';
// import Policy from '../pages/user/policy';
import NotFound from '../layouts/NotFound';


const Benefit = React.lazy(() => import('../pages/home/benefit'));
const Login = React.lazy(() => import('../pages/login/index'));
const Policy = React.lazy(() => import('../pages/user/policy'));


export const routesConfig = [

    {
        path     : '/home',
        component: HomePageLayout,
        exact    : false,
        routes   : [
            {
                path     : '/home',
                name     : 'home',
                exact    : true,
                component: Home,
            },
            {
                path     : '/home/user',
                name     : 'user',
                exact    : true,
                component: User,
            },

        ],
    },
    {
        path     : '/404',
        exact    : true,
        component: NotFound,
    },
    {
        path  : '/',
        exact : false,
        routes: [
            {
                path     : '/login',
                name     : 'loginPage',
                exact    : true,
                component: Login,
            },
            {
                path  : '/homePage',
                name  : 'homePage',
                exact : false,
                routes: [
                    {
                        path     : '/homePage/benefit',
                        name     : 'benefit',
                        exact    : true,
                        component: Benefit,
                    },
                ],
            },
            {
                path  : '/userPage',
                name  : 'userPage',
                exact : false,
                routes: [
                    {
                        path     : '/userPage/policy',
                        name     : 'policy',
                        exact    : true,
                        component: Policy,
                    },
                ],
            },
        ],
    },
    {
	    to      : '/home',
	    redirect: true,

        // from:'/'
    },
];
