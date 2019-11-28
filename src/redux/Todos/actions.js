import { CreateAction } from "../ActionCreaters"

export const ADD_TODO = 'ADD_TODO'         //添加
export const TOGGLE_TODO = 'TOGGLE_TODO'   //切换
export const DELETE_TODO = 'DELETE_TODO'   //删除
export const FILTER_TODO = 'FILTER_TODO'   //切换列表状态
export const addTodo = (text) => (
	CreateAction(ADD_TODO, { text })
)
export const deleteTodo = (id) => (
	CreateAction(DELETE_TODO, { id })
)
export const ToggleTodo = (id) => (
	CreateAction(TOGGLE_TODO, { id })
)

export const FilterTodo = (status) => (
	CreateAction(FILTER_TODO, { status })
)