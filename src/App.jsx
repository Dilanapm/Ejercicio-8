import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Exname } from './components/Exname'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Exname/> 
    </>
  )
}

export default App
