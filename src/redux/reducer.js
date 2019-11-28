import { combineReducers } from "redux"
import Count from './Counter/reducer'
import Todos, { FilterStatus } from './Todos/reducer'
import Products from './ShoppingCart/reducer'

export default combineReducers({
	Count,
	Todos,
	FilterStatus,
	Products
})