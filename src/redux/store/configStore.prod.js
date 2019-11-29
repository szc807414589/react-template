import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import reducers from '../Reducer'
// import api from 'xxx'

export default () => {
	const enhancer = applyMiddleware(
		thunkMiddleware,
		// api,
	)
	const store = createStore(reducers, enhancer)
	return store
}
