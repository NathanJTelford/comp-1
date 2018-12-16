import React from 'react'

const Product = (props) => {
    let renderProducts = props.products.map((productOb, i) => {
        let {name,price,image} = productOb;
    return( <div className='prodDiv' key={i}><img className='pics' src={image} alt='product pic'/>{name} {'$'}{+price}<button onClick={()=>console.log('find data')}>edit</button> <button onClick={()=>props.handleDelete(productOb.id)}>delete</button></div>)
    })
    return(
        <>
        {renderProducts}
        </>
    )
}

export default Product;
// onClick={()=>this.props.Delete(productOb.id)}
// onClick={()=>{console.log('product.js')}}