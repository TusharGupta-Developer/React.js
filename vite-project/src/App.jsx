import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './new.jsx'
import Ownfunction from './new.jsx';


function App() {

  const username = "Tushar";
  // In React, useState is a hook that allows you to add state management to functional components. 
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React with Vite | TG {username}</h1>
      <Ownfunction />
    </>
  )
}

export default App
