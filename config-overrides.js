const {override, fixBabelImports, addLessLoader,addDecoratorsLegacy} = require('customize-cra')

module.exports = override(
	addDecoratorsLegacy(),
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {'@brand-primary': '#fe6c55'} //antd mobile 的less变量和 antd中的 @primary-color不一样
	}),
)
