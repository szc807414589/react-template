import React from 'react'

export const routesConfig = [
	{
		path: '/login',
		name: '/login',
		icon: 'login',
		auth: ['guest'],
		component: () => import('../pages/login'),
	},
	{
		path: '/',
		name: '/',
		auth: ['guest'],
		exact: true,
		icon: 'home',
		component: () => import('../pages/home'),
	},
	{
		path: '/about',
		name: '/about',
		auth: ['guest'],
		icon: 'shop',
		routes: [
			{
				path: '/about',
				name: '/about',
				icon: 'shop',
				exact: true,
				auth: ['guest'],
				component: () => import('../pages/about/index'),
			},
			{
				path: '/about/item',
				name: 'item',
				auth: ['guest', 'user'],
				component: () => import('../pages/about/item'),
			}
		]
	},
	{
		path: '/user',
		name: '/user',
		icon: 'user',
		auth: ['guest', 'user'],
		component: () => import('../pages/user'),
	}
]