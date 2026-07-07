import {Routes, Route } from "react-router-dom"

// Layout imports
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"

// Pages imports
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"



function App() {
  

  return (
    <Routes>

      {/* parent layout */}
      <Route path="/" element = {<Layout/>} >
        <Route index element = {<Home/>} />
        <Route path="about" element = {<About/>} />
        <Route path="users" element = {<Users/>} />

        {/* dynamic route */}
        <Route path="/users/:id"
      </Route>
    </Routes>
  )
}

export default App
