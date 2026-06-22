import "./Child.css";

type AddressType = {
  city: string;
  state: string;
  country: string;
};

// Export Employee interface
export interface Employee {
    id: number;
    name: string;
    city: string;
}

type ChildProps = {
  skills: string[];
  address: AddressType;
  employee: Employee;
};


function Child(props: ChildProps) {
  return (
    <>
      <div className="student">
        My skills are: <br />
        {props.skills.map((skill) => (
          <span> {skill} <br /></span>
        ))} <br />
        City is: {props.address.city} <br />
        State is: {props.address.state} <br />
        Country is: {props.address.country} <br />
        <hr />
          <h4>Employee Details:</h4>
          ID: {props.employee.id}<br />
          Name: {props.employee.name}<br />
          City: {props.employee.city}
      </div>
      
    </>
  );
}

export default Child;
