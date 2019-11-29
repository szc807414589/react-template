const {override, fixBabelImports, addLessLoader,addDecoratorsLegacy} = require('customize-cra')

module.exports = override(
	addDecoratorsLegacy(),
	// 设置路径别名
	// addWebpackAlias({
	// '@': path.resolve(__dirname, './src/component')
	// }),

	// 设置外链
	// addWebpackExternals({
	// '$': 'jquery'
	// }),

	// 设置按需加载lodash
	// fixBabelImports('lodash', {
	//     libraryDirectory: "",
	//     camel2DashComponentName: false
	// }),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		// strictMath: true,
		// noIeCompat: true,
		// localIdentName: "[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
		javascriptEnabled: true,
		// modifyVars: {'@primary-color': '#1DA57A'},
	}),
)