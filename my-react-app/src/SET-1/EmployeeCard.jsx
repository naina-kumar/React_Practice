const EmployeeCard = (props) => {


    return (
        <>
            <div>
                {props.empdetails.name}
            </div>
            <div style={{color:"green"}}>
                {props.empdetails.designation}
            </div>
            <div style={{color:"blue"}}>
                {props.empdetails.workEx}
            </div>
            
        </>
    )
}
export default EmployeeCard