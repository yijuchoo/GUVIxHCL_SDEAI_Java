import { useState } from 'react'

// type for the form data
type FormData = {
  name: string;
  email: string;
  password: string;
}

function App() {

  // store all the form fields in one state inside one object
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  // runs whenever any textbox changes
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    // get the input name
    const name = event.target.name;

    const value = event.target.value;

    // update only changed field
    setFormData({
      ...formData,
      [name] : value
    });
  }


  // submit form
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) { -> FormEvent is deprecated but usable
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault(); // it will prevent the default behaviour of the page, prevent refreshing the page when passing data. (Data persistence)
    // (eg. payment page when data is passing we should not refresh the page, as payment data will be lost and unsuccessful)
    console.log(formData);
  }
  
  // Jsx placing our html code
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Enter your name"
        name = "name"
        onChange={handleChange}
        value={formData.name}
         />
        <br /><br /><br />

        <input 
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleChange}
        value={formData.email}
         />
        <br /><br /><br />

        <input 
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={formData.password}
         />
        <br /><br /><br />

        <button>Register</button>
      </form>
    </>
  )
}

export default App
