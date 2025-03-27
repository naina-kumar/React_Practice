import React from 'react'

const Stationary = (props) => {
  const {item,Header}=props
  return (
   <>
    <div>
      <h4>{Header}</h4>
      <ol>
        {item.map((items)=><li>{items}</li>)}
      </ol>
      
     
    </div>
   
   </>

  )
}

export default Stationary
