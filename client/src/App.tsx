import './app.css'
import { useState } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  return (
    <Navbar isLoggedIn={isLoggedIn}/>
  )
}

export default App
