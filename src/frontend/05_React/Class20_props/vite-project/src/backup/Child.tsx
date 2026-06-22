import "./Child.css"

type ChildProps = {
  name: string;
  age: string;
  course: string;
  isJoined: boolean;
};
function Child(props: ChildProps) {
  return (
    <>
      {/* <div>
        Details of user is : {props.name} and age is {props.age} <br />
      </div> */}
      <div className="student">
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <h3>{props.course}</h3>
        <h3>
          {props.isJoined ? "Joined today's class" : "Not joined today's class"}
        </h3>
      </div>
    </>
  );
}

export default Child;
