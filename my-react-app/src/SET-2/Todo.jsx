import React from 'react'

const Todo = ({Todoitems}) => {
  return (
    <div>
      <ul>{Todoitems.map((item)=><li><h2 style={{color:"violet"}}>{item.title}</h2>
      <p style={{color:"lightgreen"}}>{item.description}</p></li>)}</ul>
    </div>
  )
}

export default Todo
