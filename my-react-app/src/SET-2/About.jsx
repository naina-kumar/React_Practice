import React from 'react'

const About = ({Name,Heading,Learning}) => {
  return (
    <div>
      <h1>{Heading}</h1>
      <h2>{Name}</h2>
      <button>Know More</button>
      <p>{Learning}</p>
    </div>
  )
}

export default About
