import React from 'react'

const EmpDetails = () => {
   const employees= [
        {
           name: 'Jack Smith',
           level: 2,
           dept: 'Tech',
           designation: 'Manager',
           salary: 24000,
        },
        {
           name: 'Mary Robbins',
           level: 3,
           dept: 'Fin',
           designation: 'Manager',
           salary: 28000,
        },
        {
           name: 'Steve Williams',
           level: 4,
           dept: 'Ops',
           designation: 'President',
           salary: 35000,
        },
        {
           name: 'Bob Andrews',
           level: 1,
           dept: 'Fin',
           designation: 'Trainee',
           salary: 16500,
        },
        {
           name: 'Dave Martin',
           level: 2,
           dept: 'Fin',
           designation: 'Manager',
           salary: 21700,
        },
        {
           name: 'Julia Clarke',
           level: 3,
           dept: 'Ops',
           designation: 'Manager',
           salary: 26900,
        },
        {
            name: 'Kathy Jones',
            level: 4,
            dept: 'Tech',
            designation: 'President',
            salary: 42500,
         },
         {
            name: 'Tom Bresnan',
            level: 2,
            dept: 'Tech',
            designation: 'Manager',
            salary: 22200,
         },
        ]
  return (
    <div>Employee Details
       <ul> {employees.map((emp)=><div style={{backgroundColor:(emp.level===2?"orange":""),border:(emp.designation==='President'?"solid 3px blue":"")}}>
            Name:{emp.name}- Level:{emp.level} - Dept:{emp.dept} - Salary:{emp.salary}</div>
    )}
      </ul>
      <div>Total salary expense:{employees.map((employee)=>employee.salary).reduce((acc,curr)=>acc+curr,0)}</div>
    </div>
  )
}

export default EmpDetails
