import React from 'react'

const StudentDetails = ({stu}) => {
  return (
    <div>
      <h3>Student Detail</h3>
      <ul>{stu.map((detail)=><li>Name:{detail.name},English:{detail.english},Maths:{detail.maths},Computers:{detail.computers}</li>)}
</ul>
    </div>
  )
}

export default StudentDetails
