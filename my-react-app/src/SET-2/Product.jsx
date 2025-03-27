import React from 'react'

const Product = ({name,price}) => {
  return (
    <div>
        <p style={{fontWeight:"bold", color:"blue"}}>{name}</p>
        <p style={{fontStyle:"italic", color:"green"}}>{price}</p>
    </div>
  )
}

export default Product
