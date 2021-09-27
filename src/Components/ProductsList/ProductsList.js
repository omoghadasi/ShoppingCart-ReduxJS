import './ProductsList.css'
import ProductItem from "../ProductItem/ProductItem";

function ProductsList({products}) {
    return (
        <div>
            <h3>Products List</h3>
            <div className="d-flex flex-wrap">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>

        </div>
    )
}

export default ProductsList;