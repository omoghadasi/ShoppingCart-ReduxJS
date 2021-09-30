import './CartItem.css'

function CartItem({image, title, description, price,quantity}) {
    return (
        <div className="p-3 product-card col-12 d-flex align-items-center">
            <div className="col-2 d-inline-block">
                <img src={image}
                     alt={title}/>
            </div>
            <div className="col-10 d-inline-block">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-8">
                        <h5>{title}</h5>
                        <small>{description}</small>
                    </div>
                    <p className="text-center col-2">${price + " - x" + quantity}</p>
                    <p className="text-center col-2">${price*quantity}</p>
                </div>
            </div>

        </div>
    )
}

export default CartItem;