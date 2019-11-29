import { combineReducers } from "redux"
import Count from '../Containers/Counter/reducer'
import Todos, { FilterStatus } from '../Containers/Todos/reducer'
import Todos_Async, { FilterStatus_Async } from '../Containers/TodosAsync/reducer'

export default combineReducers({
	Count,
	Todos,
	FilterStatus,
	Todos_Async,
	FilterStatus_Async,
})