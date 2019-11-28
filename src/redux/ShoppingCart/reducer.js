import * as Actions from './actions'

const Products = (state = [], action) => {
	switch (action.type) {
		case Actions.RECEIVE_PRODUCTS:
			return action.payload.products
		default:
			return state
	}
}

export default Products