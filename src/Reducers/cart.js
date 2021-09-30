import {ADD_TO_CART, CHECKOUT_REQ} from "../Contants/actionTypes";

const initialState = {
    addedId: [],
    quantityById: {}
}

function addedId(state = initialState.addedId, action) {
    if (state.indexOf(action.productsId) !== -1) {
        return state
    }
    return [...state, action.productsId];
}

const quantityById = (state = initialState.quantityById, action) => {
    const {productsId} = action;
    return {
        ...state,
        [productsId]: (state[productsId] || 0) + 1
    };
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addedId: addedId(state.addedId, action),
                quantityById: quantityById(state.quantityById, action)
            }
        case CHECKOUT_REQ:
            return initialState
        default:
            return state
    }
}

export default cart;