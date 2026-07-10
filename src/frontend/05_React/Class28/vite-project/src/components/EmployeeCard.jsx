import EmployeeDetails from "./EmployeeDetails"

function EmployeeCard({employee}) {

    return (
        <div style={{border: "2px solid blue", padding: "15px", marginTop: "20px"}}>
            <h2>Employee Card</h2>
            <EmployeeDetails employee = {employee}/>
        </div>
    )

}

export default EmployeeCard