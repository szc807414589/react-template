import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducer'

// const isDev = () => process.env.NODE_ENV === 'development'

export default () => {
	//logMiddleware 打印redux信息
	const logMiddleware = createLogger()
	//Store enhancer 是一个组合 store creator 的高阶函数，
	// 返回一个新的强化过的 store creator。
	// 这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
	const enhacer = applyMiddleware(
		thunkMiddleware,
		logMiddleware,
	)
	const store = createStore(reducers, enhacer)
	// if (isDev() && module.hot) {
	// 	module.hot.accept('./reducer.js', () => {
	// 		const nextReducer = require('./reducer.js').default
	// 		store.replaceReducer(nextReducer)
	// 	})
	// }
	return store
}
