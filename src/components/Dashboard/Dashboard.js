import React, {Component} from 'react';
import Product from '../Product/Product'


export default class Dash extends Component{
    constructor(props){
        super(props)
    }
   



    render(){
        console.log(this.props, 'dash props')
        return(
            <div>
            Dashboard
            <Product products={this.props.products}/>
            </div>
        )
    }
}