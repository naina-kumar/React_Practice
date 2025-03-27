import React from 'react'

const Image = ({height,width}) => {
  return (
    <div>
      <img src='https://picsum.photos/200' alt='text' style={{height:{height}, width:{width}}}/>
     
    </div>
  )
}

export default Image
