import * as Actions from './actions'

const Products = (state = [], action) => {
	switch (action.type) {
		case Actions.RECEIVE_PRODUCTS:
			return state
		default:
			return state
	}
}

export default Products