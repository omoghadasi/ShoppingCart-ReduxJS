import {ADD_TO_CART, RECEIVE_PRODUCTS} from "../Contants/actionTypes";

const products=(state={},action)=>{
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj,product)=>{
                    obj[product.id]=product;
                    return obj;
                },{})
            }
        case ADD_TO_CART:
            let {productsId}=action
            let product=state[productsId]
            return {
                ...state,
                [productsId]:{
                    ...product,rating:{count:product.rating.count-1}
                }
            }
        default:
            return state
    }
}

export default products;