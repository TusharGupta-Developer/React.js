import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);

  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += '0123456789'
    if (CharacterAllowed) str += "! @ # $ % ^ & * ( ) - _ + = [ ] { } | \ ? ~ `";

    for(let i = 0; i< Array.length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
    }



  }, [length, numberAllowed, CharacterAllowed, setPassword]);

  return (
    <>
     <h1 className='text-4xl text-center text-white'>
      Password Generator</h1>
    </>
  )
}

export default App
