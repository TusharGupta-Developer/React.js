import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './custom_components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const Obj = {
    name:'Tushar',
  }
  let newArr = [1,2,3];

  return (
    <>
      <h1 className='bg-green-400 text-red p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card channel="Code" myObj ={Obj} arr={newArr}/>
      <Card userName = "Tushar" />
      

      

    </>
  )
}

export default App
