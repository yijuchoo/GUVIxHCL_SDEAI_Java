import Child from "./Child";

function App() {
  return (
    <>
      <Child name="Ram" age="20" course="React" isJoined={true} />
      <Child name="Venkat" age="28" course="React" isJoined={false} />
      <Child name="Sree" age="50" course="React" isJoined={false}/>
      <Child name="Jack" age="60" course="React" isJoined={true}/>
      <Child name="John" age="100" course="React" isJoined={false} />
    </>
  );
}
export default App;
