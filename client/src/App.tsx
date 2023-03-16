import Navbar from "./components/Navbar"
import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Callback from "./pages/Callback"
import Login from "./pages/Login"
import { useState } from "react"
function App() {
  const [userData, setUserData] = useState({})

  return (
    <>
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home userData={userData} setUserData={setUserData} />}/>
              <Route path='/callback' element={<Callback/>} />
              <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
