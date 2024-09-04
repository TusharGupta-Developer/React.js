
import { useState, useCallback, useEffect, useRef } from "react"

function App(){
  
  const[Password, setPassword] = useState(''); 
  const[Length, setLength] = useState(8);
  const[CharacterAllowed, setCharacterAllowed] = useState(false);
  const[NumberAllowed, setNumberAllowed] = useState(false);

  //useRef hook
  const copyRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumberAllowed) str += "0123456789"
    if(CharacterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/`~"

    for(let i =0; i < Length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [Length, CharacterAllowed, setNumberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [Length, CharacterAllowed, setNumberAllowed])

  
  function copyClipBoard() {
    window.navigator.clipboard.writeText(Password)

    copyRef.current?.select()
    copyRef.current?.setSelectionRange(0,50)

  }



  





  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">

        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="className='flex-shadow' rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className='outline-none w-full py-1 px-3'
            placeholder='password'

            value={Password}
            readOnly
            ref={copyRef}
          
          />
        </div>

        <button
        onClick={()=>{
          copyClipBoard()
        }}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input

              type="range"
              min={1}
              max={100}
              className='cursor-pointer'
              value={Length}
              onChange={(e)=>{
                setLength(e.target.value)
              }}
             

            />
            <label>Length:{Length}</label>

            <input
              type="checkbox"
              id="numberInput"
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev)//reverse the previous value
              }}

            />
            <label>Character</label>

            <input type="checkbox"
              value={NumberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
