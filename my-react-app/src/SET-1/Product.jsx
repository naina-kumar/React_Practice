import React from 'react'

const Product = ({prod}) => {
  return (
    <div>
      <h2>Products Name</h2>
      <ul>
        {/* {prod.map((item)=><li>{item.name}</li>)} */}
        {prod.filter((product)=>product.sales>product.quantity).map((product)=><li>Name:{product.name},Quantity:{product.quantity},Sales:{product.sales}</li>)}

      </ul>
    </div>
  )
}

export default Product
