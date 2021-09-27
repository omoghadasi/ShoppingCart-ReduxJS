import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Component} from "react";
import axios from "axios";
import ProductsList from "./Components/ProductsList/ProductsList";

class App extends Component {
  state={
    products:[]
  }
  componentDidMount(){
    axios.get('https://fakestoreapi.com/products')
        .then(res=> this.setState({products:res.data}))
        .catch(err=>console.log(err))
  }

  render() {
    return (
        <div className="App">
          <h2>Shopping Cart Example</h2>
          <hr/>
            <ProductsList products={this.state.products}/>
        </div>
    );
  }
}

export default App;
