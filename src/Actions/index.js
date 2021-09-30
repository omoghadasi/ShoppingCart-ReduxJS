import * as types from '../Contants/actionTypes'

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const addToCart = productsId => ({
    type: types.ADD_TO_CART,
    productsId
})
export const checkoutReq = () => ({
    type: types.CHECKOUT_REQ,
})