import * as Actions from './actions'

let initId = 0
const Todos = (state = [], action) => {
	switch (action.type) {
		case Actions.ADD_TODO:
			return [
				...state,
				{
					id: initId++,
					text: action.payload.text,
					completed: false
				}
			]
		case Actions.DELETE_TODO:
			return state.filter((v) => v.id !== action.payload.id)
		case Actions.TOGGLE_TODO:
			return state.map(v => (
				(v.id === action.payload.id) ?
					{ ...v, completed: !v.completed }
					: v
			))
		default:
			return state
	}
}
export const FilterStatus = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case Actions.FILTER_TODO:
			return action.payload.status
		default:
			return state
	}
}
export default Todos