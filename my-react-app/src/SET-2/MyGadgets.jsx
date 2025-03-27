import React from 'react'

const MyGadgets = ({Product: items}) => {
  return (
    <div>
      <ol>{items.map((items)=> <li style={{backgroundColor:(items.price>50000?"Lightgreen":"")}}>{items.name} {items.description} {items.price}</li>)
       
}</ol>
      <button>Highlight Expensive Gadget</button>
    </div>
  )
}

export default MyGadgets
