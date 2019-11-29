import * as Actions from './actions'

let initId = 0
const Todos_Async = (state = [], action) => {
	switch (action.type) {
		case Actions.ADD_TODO_ASYNC:
			return [
				...state,
				{
					id: initId++,
					text: action.payload.text,
					completed: false
				}
			]
		case Actions.DELETE_TODO_ASYNC:
			return state.filter((v) => v.id !== action.payload.id)
		case Actions.TOGGLE_TODO_ASYNC:
			return state.map(v => (
				(v.id === action.payload.id) ?
					{ ...v, completed: !v.completed }
					: v
			))
		default:
			return state
	}
}
export const FilterStatus_Async = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case Actions.FILTER_TODO_ASYNC:
			return action.payload.status
		default:
			return state
	}
}
export default Todos_Async