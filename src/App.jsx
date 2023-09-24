import {  BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"



function App() {
   return (
    <Router>
      <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/reg" element={<Register/>}/>
     </Routes>
     </Router>
  )
}

export default App
