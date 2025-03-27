import React from 'react'

const Article = ({Title, Content}) => {
  return (
    <div>
      <h1>{Title}</h1>
      <button>Know More</button>
      <p>{Content}</p>
    </div>
  )
}

export default Article
