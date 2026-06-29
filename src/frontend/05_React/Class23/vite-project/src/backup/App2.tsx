import { useState } from "react";

function App() {
  const [skills, setSkills] = useState<string[]>([]);

  function handleSkill(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setSkills([
        ...skills, 
        event.target.value
      ]);
    } else {
      setSkills(
        skills.filter(
        (skill) => skill !== event.target.value
      )
    );
    }
  }

  return (
    <>
      <label>
        <input 
        type="checkbox" 
        value="React"
        onChange={handleSkill} 
        />
        React
      </label>

      <label>
        <input 
        type="checkbox" 
        value="Angular"
        onChange={handleSkill}
         />
        Angular
      </label>

      <label>
        <input 
        type="checkbox" 
        value="NodeJS"
        onChange={handleSkill} />
        NodeJS
      </label>

      <h4>{skills.join(", ")}</h4>
    </>
  );
}

export default App;
