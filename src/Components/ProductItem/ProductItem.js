import './ProductItem.css'

function ProductItem({product}){
    const {image,title,price,description,rating}=product
    return(
        <div className="col-2 p-3 product-card">
            <img src={image}
                 alt={title}/>
            <div className="d-flex justify-content-between">
                <h5 className="text-center">{title.toString().substr(0,10)}</h5>
                <p className="text-center">${price}</p>
            </div>
            <small>{description.toString().substr(0,100)} ...</small>

            <button className="d-block col-12 mt-3" disabled={rating.count >0 ? '' : 'disabled'}>{rating.count >0 ? `Add To Cart - ${rating.count}` : 'Sold Out'}</button>
        </div>
    )
}

export default ProductItem;