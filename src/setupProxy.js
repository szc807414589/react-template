/*使用http-proxy-middleware解决跨域*/

const proxy = require("http-proxy-middleware")
module.exports = function (app) {
	app.use(
		"/api",
		proxy( {
			target: "https://isou.io",
			pathRewrite: {
				"^/api": "/"
			},
			changeOrigin: true
		})
	)
//   app.use(
//     proxy("/fans/**", {
//       target: "https://easy-mock.com/mock/5c0f31837214cf627b8d43f0/",
//       changeOrigin: true
//     })
//   );
}