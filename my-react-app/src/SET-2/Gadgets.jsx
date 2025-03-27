import React from 'react'

const Gadgets = ({Product}) => {
  return (
    <div>
      {/* <ol>{
        Product.map((items)=>(<li style={{border:(items.price>50000?"solid 3px red":"")}}>
            {items.name} - {items.description} - {items.price}</li>))}
      </ol> */}
      <ul>
        {
          Product.filter((item)=>item.name==="mobile").map((item)=><li>Name:{item.name}  Description:{item.description}  Price:{item.price}<br/></li>)
        }
      </ul>
    </div>
  )
}

export default Gadgets
