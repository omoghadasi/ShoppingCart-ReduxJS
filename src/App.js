import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Component} from "react";
import axios from "axios";
import ProductsList from "./Components/ProductsList/ProductsList";
import {connect} from "react-redux";
import {receiveProducts} from "./Actions";

class App extends Component {
  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
        .then(res=> this.props.receiveProducts(res.data))
        .catch(err=>console.log(err))
  }

  render() {
    return (
        <div className="App">
          <h2>Shopping Cart Example</h2>
          <hr/>
            <ProductsList/>
        </div>
    );
  }
}

const mapDispatchToProps=dispatch=>({
        receiveProducts : products=>dispatch(receiveProducts(products))
})
export default connect(null,mapDispatchToProps)(App);
