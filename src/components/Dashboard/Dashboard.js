import React, {Component} from 'react';
import Product from '../Product/Product'


export default class Dash extends Component{
   



    render(){
        return(
            <div>
            Dashboard
            <Product/>
            {this.props.children}
            </div>
        )
    }
}