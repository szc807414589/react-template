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
import React from "react"

export const routesConfig = [
	//两个tabbar页面
	{
		path: '/home',
		component: React.lazy(() => import('../layouts/HomePage')),
		exact: false,
		routes: [

			{
				path: '/home',
				name: 'home',
				exact: true,
				component: React.lazy(() => import('../pages/home')),
			},
			{
				path: '/home/user',
				name: 'user',
				exact: true,
				component: React.lazy(() => import('../pages/user')),
			},
		]
	},
	{
		path:'/',
		// exact: true,
		component: React.lazy(() => import('../layouts/TransAnimateLayout')),
		routes:[
			{
				path: '/login',
				name: 'loginPage',
				exact: false,
				component: React.lazy(() => import('../pages/login')),
			},
			{
				path: '/homePage',
				name: 'homePage',
				exact: false,
				//
				routes: [
					{
						path: '/homePage/benefit',
						name: 'benefit',
						exact: true,
						component: React.lazy(() => import('../pages/home/benefit')),
					},
				]
			},
			{
				path: '/userPage',
				name: 'userPage',
				exact: false,
				routes: [
					{
						path: '/userPage',
						redirect: '/home',
						exact: true,
					},
					{
						path: '/userPage/policy',
						name: 'userPage/policy',
						exact: false,
						isTab: false,
						component: React.lazy(() => import('../pages/user/policy')),
					},
				]
			},
		]
	},

	// {
	// 	path: '/',
	// 	redirect: '/home',
	// },
]
