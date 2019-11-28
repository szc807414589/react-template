/*
* 获取商品列表
* 购物车+1
* 购物车-1
*
* 获取购物车列表
* 购物车合计
*
* 结算
* */
import { CreateAction } from "../ActionCreaters"
import api from '../../api'

export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

//获取商品列表
export const getProducts = () => dispatch => (
	api.getProducts(products => {
		dispatch(CreateAction(RECEIVE_PRODUCTS, { products }))
	})
)
//添加购物车
export const addToCart = id => (dispatch,getState) => (
	dispatch(CreateAction(ADD_TO_CART,{id}))
)