import { useParams } from "react-router-dom"


function UserDetails() {
    const {id} = useParams();

    return (
        <>
            <h3>User Details Page</h3>
        </>
    )
}

export default UserDetails