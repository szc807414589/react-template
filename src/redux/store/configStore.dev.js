import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from '../Reducer'
import DevTools from '../Containers/DevTools'

// const isDev = () => process.env.NODE_ENV === 'development'

export default () => {
	//logMiddleware 打印redux信息
	const logMiddleware = createLogger()
	//Store enhancer 是一个组合 store creator 的高阶函数，
	// 返回一个新的强化过的 store creator。
	// 这与 middleware 相似，它也允许你通过复合函数改变 store 接口。

	const enhancer = applyMiddleware(
		thunkMiddleware,
		logMiddleware,
	)
	const store = createStore(reducers, compose(enhancer,DevTools.instrument()))
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../Reducer', () => {
			store.replaceReducer(reducers)
		})
	}
	return store
}
