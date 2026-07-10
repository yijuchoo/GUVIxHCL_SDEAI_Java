import EmployeeDetails from "./EmployeeDetails"

function EmployeeCard() {

    return (
        <div style={{border: "2px solid blue", padding: "15px", marginTop: "20px"}}>
            <h2>Employee Card</h2>
            <EmployeeDetails />
        </div>
    )

}

export default EmployeeCard