import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product/Product';
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
      products: [],
      editProd:[]


    }
    this.imageHandler = this.imageHandler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.postHandler = this.postHandler.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
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
  postHandler() {
    let product = {
      image: this.state.image,
      description: this.state.description,
      price: this.state.price
    }

    Axios.post(`/api/product`, product).then(res=>{
      let arr = res.data;
      this.setState({
        products:arr
      })
    })
    // console.log(' clickHandeler hit')
  }

  handleDelete(id){
    Axios.delete(`/api/product/${id}`).then((res)=>{
      let arr = res.data;
      this.setState({
        products:arr
      })
    })
  }

  handleEdit(id){
    let edit = this.state.editProd;
    Axios.put(`/api/product/${id}`,edit).then(res=>{
      this.setState({
        Products:res.data
      })
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

  toggleButton(){}



  handleCancel() {
    this.setState({
      image: '',
      description: '',
      price: 0
    })
  }
  // testProps(){
  //   console.log('hit from product')
  // }




  render() {
    return (
      <div className="App">

        <div className='header'>
          <Header />
          <h2 className='headertext'>SHELFIE</h2>
        </div>

        <div className='flex'>

          <div className='dash'>
            <Dashboard products={this.state.products} handleDelete={this.handleDelete}>
              <div className='products'>

              </div>
            </Dashboard>
          </div>
          {/* <Product products={this.state.products} /> */}
          <div className="form">
            <Form />
            <ul>
              <div>
                {/* <img src='https://i.imgflip.com/1mjhuz.jpg' alt='' className='default pic'/> */}
              </div>
              <label>
                Image:URL
              <li><input onChange={(e) => this.imageHandler(e.target.value)} value={this.state.image} /></li>
              </label>
              <label>
                Product Info
              <li><input onChange={(e) => this.productHandler(e.target.value)} value={this.state.description} /></li>
              </label>
              <label>
                Price
              <li><input onChange={(e) => this.priceHandler(e.target.value)} value={this.state.price} /></li>
              </label>
              <div className='buttons'>
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.postHandler()}>Add Inventory</button>
              </div>
            </ul>

          </div>
        </div>


      </div>
    );
  }
}

export default App;
