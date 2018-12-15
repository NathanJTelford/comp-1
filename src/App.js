import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      description: '',
      price: 0,
      products: []


    }
    this.imageHandler = this.imageHandler.bind(this)
  }


  componentDidMount() {
    Axios.get(`/api/products`).then((res) => {
      let arr = res.data;
      this.setState({
        products: arr
      })
      console.log(this.state.products)
    })
  }


  imageHandler(value) {
    this.setState({
      image: value
    })
    console.log(value)
  }

  productHandler(value) {
    this.setState({
      description: value
    })
  }

  priceHandler(value) {
    this.setState({
      price: value
    })
  }


  postHandler() {
    let product = {
      image: this.state.image,
      description: this.state.description,
      price: this.state.price
    }

    Axios.post(`/api/product`, product)
    // console.log(' clickHandelr hit')
  }




  render() {
    return (
      <div className="App">

        <div className='header'>
          <Header />
        </div>

        <div className='flex'>

        <div className='dash'>
          <Dashboard>
            <div className='products'>
              <Product products={this.state.products} />
            </div>
          </Dashboard>
        </div>

        <div className="form">
          <Form />
          <ul>
            <label>
              Image:URL
              <li><input onChange={(e) => this.imageHandler(e.target.value)} /></li>
            </label>
            <label>
              Product Info
              <li><input onChange={(e) => this.productHandler(e.target.value)} /></li>
            </label>
            <label>
              Price
              <li><input onChange={(e) => this.priceHandler(e.target.value)} /></li>
            </label>

            <button>Cancel</button>
            <button onClick={() => this.postHandler()}>Add Inventory</button>
          </ul>

        </div>
        </div>


      </div>
    );
  }
}

export default App;
