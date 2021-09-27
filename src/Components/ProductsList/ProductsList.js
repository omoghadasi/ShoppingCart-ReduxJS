import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProductsList.css'
import ProductItem from "../ProductItem/ProductItem";
import Slider from "react-slick"
import {connect} from "react-redux";

function ProductsList({products}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false
    };

    return (
        <div>
            <h3>Products List</h3>
            <div className="col-12">
                <Slider {...settings}>
                    {products.map(product => <ProductItem key={product.id}
                                                          product={product}/>)}
                </Slider>
            </div>
        </div>
    )
}

const getProduct=products=>Object.keys(products).map(id=>products[id])

const mapStateToProps=state=>({
        products: getProduct(state.products)
})

export default connect(mapStateToProps)(ProductsList);