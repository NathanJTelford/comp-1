import React from 'react';

const Product = (props) => {


    const array = this.state.props;
    const products = array.map((product, i) => { return (<div key={i} >{product.name}</div>) })

    return (
        <div>
           {props.products}
        </div>
    )
}

export default Product;