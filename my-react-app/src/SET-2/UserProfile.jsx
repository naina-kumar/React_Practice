import React from 'react'

const UserProfile = ({data}) => {
  return (
    <div>
     <ol><li>Name:{data.name} </li>
     <li>Age:{data.age} </li>
     <li>EmailId:{data.email}</li>
     </ol>
    </div>
  )
}

export default UserProfile
