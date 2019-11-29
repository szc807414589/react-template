export const routesConfig = [
	{
		path: '/login',
		name: '/login',
		icon: 'login',
		//auth: ['guest'],
		component: () => import('../pages/login'),
	},
	{
		path: '/',
		name: '/',
		//auth: ['guest'],
		exact: true,
		icon: 'home',
		component: () => import('../pages/home'),
	},
	{
		path: '/about',
		name: '/about',
		//auth: ['guest'],
		icon: 'shop',
		routes: [
			{
				path: '/about',
				name: '/about',
				icon: 'shop',
				exact: true,
				//auth: ['guest'],
				component: () => import('../pages/about/index'),
			},
			{
				path: '/about/item',
				name: 'item',
				//auth: ['guest', 'user'],
				component: () => import('../pages/about/Mobx/item'),
			},
			{
				path: '/about/mobx_count',
				name: 'mobx_count',
				//auth: ['guest', 'user'],
				component: () => import('../pages/about/Mobx/Count'),
			},
			{
				path: '/about/mobx_todo',
				name: 'mobx_todo',
				//auth: ['guest', 'user'],
				component: () => import('../pages/about/Mobx/Todo'),
			},
		]
	},
	{
		path: '/user',
		name: '/user',
		icon: 'user',
		//auth: ['guest', 'user'],
		component: () => import('../pages/user'),
	}
]