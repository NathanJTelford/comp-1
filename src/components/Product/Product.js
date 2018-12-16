// import React from 'react';

// const Product = (props) => {


//     console.log('prod props', props)
//     const array = props.products;
//     const products = array.map((product, i) => { return (<div key={i} >{product.name}</div>) })
//     return (
//         <div>
//            {products}
//         </div>
//     )
// }

// export default Product;

import React from 'react'

const Product = (props) => {
    let renderProducts = props.products.map((productOb, i) => {
        let {name,price,image} = productOb;
    return( <div className='prodDiv' key={i}><img className='pics' src={image} alt='product pic'/>{name}{price}</div>)
    })
    return(
        <>
        {renderProducts}
        </>
    )
}

export default Product;
