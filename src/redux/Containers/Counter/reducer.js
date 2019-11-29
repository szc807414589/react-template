import * as Actions from './actions'

const Count = (state = { value: 0 }, action) => {
	switch (action.type) {
		case Actions.ADD_COUNTER:
			return {
				value: state.value + action.payload.count
			}
		case Actions.SUB_COUNTER:
			return{
				value:state.value - action.payload.count
			}
		default:
			return state
	}
}
export default Count