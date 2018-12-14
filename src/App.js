import React, { Component } from 'react';
import './App.css';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
// import Axios from 'axios';
// import CTRL from '../server/Controller'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invintory:'',
      input:''

    }
    console.log(Image.value)
    this.textHandler = this.textHandler.bind(this)
  }
  

  textHandler(value){
    this.setState=({
      Image:value
    })
  }

  // componentDidMount(req,res){
  //   Axios.get(`/api/product`,CTRL.getAll).then(
  //     this.setState({invintory:res.data})
  //   )
  // }


  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header />
        </div>

        <div className='dash'>
          <Dashboard>
            <div className='products'>
            <Product />
            </div>
          </Dashboard>
        </div>


        <div className="form">
          <Form />
            <ul>
              <label>
                Image:URL
              <li><input onChange={(e)=>this.textHandler(e.target.value)}/></li>
              </label>
              <label>
                Product Info
              <li><input/></li>
              </label>
              <label>
                Price
              <li><input/></li>
              </label>
             
            <button>Cancel</button>
            <button>Add Inventory</button>
            </ul>

          </div>
          

      </div>
    );
  }
}

export default App;
