import products from './products'

const TIME = 500
export default {
	getProducts: (cb) => setTimeout(() => cb(products), TIME),
	buyProducts: (cb) => setTimeout(() => cb(), TIME)
}