import Navbar from './components/Navbar'
import Items from './components/Items'
import './App.css'
import { useEffect } from 'react'
function App() {
  const fetchApi = async ()=>{
      const response = await fetch("")
      const data = await response.json()
      console.log(data)
  }
 useEffect(()=>{},[])
  return (
    <>
     <Navbar/>
     <Items/>
     
    </>
  )
}

export default App
