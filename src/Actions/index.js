import * as types from '../Contants/actionTypes'

export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})