const proxy = require('http-proxy-middleware')

module.exports = function (app) {
	app.use(
		'/api',
		proxy({
			target: 'https://isou.io',
			pathRewrite: {
				"^/api": '/'
			},
			changeOrigin: true
		})
	)
}