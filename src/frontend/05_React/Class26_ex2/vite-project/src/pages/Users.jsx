

function Users() {

    const employees = [
        {
            id: 101,
            name: "venkat",
            department: "IT",
            experience: "5 years"
        },
        {
            id: 102,
            name: "sree",
            department: "IT",
            experience: "8 years"
        },
        {
            id: 103,
            name: "vishnam",
            department: "IT",
            experience: "10 years"
        },
        {
            id: 104,
            name: "ram",
            department: "HR",
            experience: "15 years"
        }
    ]

    return (
        <>
            <h1>Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Profile</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Users