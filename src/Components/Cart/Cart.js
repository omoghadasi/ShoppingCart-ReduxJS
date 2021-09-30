import './Cart.css'
import {connect} from "react-redux";
import CartItem from "../CartItem/CartItem";
import {checkoutReq} from "../../Actions";

function Cart({total, products,checkout}) {
    const hasProducts = products.length > 0;
    console.log(total)
    const nodes = hasProducts ? (
        products.map(product => <CartItem key={product.id} {...product}/>)
    ) : (
        <em>please add some products</em>
    )
    return (
        <>
            <h3>Your Cart</h3>
            <div className="container">
                <div>{nodes}</div>
            </div>

            <p>Total: ${total || 0}</p>
            <button disabled={hasProducts?'':'disabled'} onClick={checkout}>Checkout</button>
        </>
    )
}


function getCartProducts(state) {
    return state.cart.addedId.map(id => ({
        ...state.products[id],
        quantity: (state.cart.quantityById[id] || 0)
    }))
}

const getTotal = state => state.cart.addedId.reduce((total, id) => total + state.products[id].price * (state.cart.quantityById[id]||0), 0).toFixed(2)


const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state)
})
const mapDispatchToProps = dispatch => ({
  checkout:()=>dispatch(checkoutReq())
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);