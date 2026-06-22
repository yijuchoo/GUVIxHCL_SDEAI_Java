import "./Child.css";

type AddressType = {
  city: string;
  state: string;
  country: string;
};

// Interface example

interface ChildProps {
  skills: string[];
  address: AddressType;
}


function Child(props: ChildProps) {
  return (
    <>
      <div className="student">
        My skill are: <br />
        {props.skills.map((skill) => (
          <span> {skill} <br /></span>
        ))} <br />
        City is: {props.address.city} <br />
        State is: {props.address.state} <br />
        Country is: {props.address.country} <br />
      </div>
    </>
  );
}

export default Child;
