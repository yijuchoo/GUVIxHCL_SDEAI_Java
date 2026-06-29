import { useState } from "react";

// dropdown

function App() {
  // state value
  // country selection
  const [country, setCountry] = useState("");

  // gender selection
  const [gender, setGender] = useState("");

  // function for the dropdwon
  function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    setCountry(event.target.value);
  }

  // function for the gender selection
  function handleGender(event: React.ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value);
  }

  return (
    <>
      <select 
      onChange={handleCountry} 
      value={country}
      >
        <option>Select Country</option>
        <option>India</option>
        <option>USA</option>
        <option>Canada</option>
      </select>
      <span>&nbsp;</span>
      <span>Selected country is: {country}</span>
      <br /><br /><br />

      <label>
        <input 
        type="radio" 
        name="gender"
        value="Male"
        onChange={handleGender}
        />
      Male
      </label>

      <label>
        <input 
        type="radio" 
        name="gender"
        value="Female"
        onChange={handleGender}
        />
      Female
      </label>

      <label>
        <input 
        type="radio" 
        name="gender"
        value="Transgender"
        onChange={handleGender}
        />
      Transgender
      </label>

      <br /><br />
      Selected gender is: {gender}
    </>
  );
}

export default App;
