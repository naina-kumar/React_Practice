import React from 'react'

const Button = ({BackG,Color,BorderR}) => {
    // const {BackG,Color,BorderR}=props

  return (
    <div>
      <button style={{backgroundColor:BackG, color:Color,borderRadius:BorderR}}>Start </button>
    </div>
  )
}

export default Button
