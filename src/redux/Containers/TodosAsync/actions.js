import { CreateAction } from "../../Action/ActionCreaters"

export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC'         //添加
export const TOGGLE_TODO_ASYNC = 'TOGGLE_TODO_ASYNC'   //切换
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC'   //删除
export const FILTER_TODO_ASYNC = 'FILTER_TODO_ASYNC'   //切换列表状态
export const addTodo_async = (text) => dispatch => (
	setTimeout(() => {
		dispatch(CreateAction(ADD_TODO_ASYNC, { text }))
	}, 500)
)
export const deleteTodo_async = (id) => (
	CreateAction(DELETE_TODO_ASYNC, { id })
)


export const ToggleTodo_async = (id) => (
	CreateAction(TOGGLE_TODO_ASYNC, { id })
)

export const FilterTodo_async = (status) => (
	CreateAction(FILTER_TODO_ASYNC, { status })
)