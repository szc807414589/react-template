/*
* 约定 上层目录可以作为layout
*   比如
*       [
			  { path: '/', component: './pages/index' },
			  { path: '/users', component: './pages/users' },
		]
	可以写成
		[
		  { path: '/', component: './layouts/index', routes: [
		    { path: '/', component: './pages/index' },
		    { path: '/users', component: './pages/users' },
		  ] }
		]
*
*
* path 路径
* isTab 是否为首页tab页面
* component ()=>import('页面地址')
* */
import React from 'react';
import HomePageLayout from '../layouts/HomePage';
import Home from '../pages/home/index';
import User from '../pages/user/index';

const Benefit = React.lazy(() => import('../pages/home/benefit'));
const Login = React.lazy(() => import('../pages/login'));
const Policy = React.lazy(() => import('../pages/user/policy'));

export const routesConfig = [
    //两个tabbar页面
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
        path  : '/',
        exact : true,
        routes: [
            {
                path     : '/login',
                name     : 'loginPage',
                exact    : false,
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
                        name     : 'userPage/policy',
                        exact    : false,
                        isTab    : false,
                        component: Policy,
                    },
                ],
            },
        ],
    },
    {
        path    : '/',
        redirect: '/home',
    },
];
