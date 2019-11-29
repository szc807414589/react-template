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
			},
			{
				path: '/about/redux_counter',
				name: 'redux_counter',
				auth: ['guest', 'user'],
				component: () => import('../pages/about/redux/Counter'),
			},
			{
				path: '/about/redux_todo',
				name: 'redux_todo',
				auth: ['guest', 'user'],
				component: () => import('../pages/about/redux/Todo'),
			},
			{
				path: '/about/redux_todo_async',
				name: 'redux_todo_async',
				auth: ['guest', 'user'],
				component: () => import('../pages/about/redux/TodoAsync'),
			},

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