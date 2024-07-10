import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*~!@#$%^&*~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)// like if value of char is 58 then str.charAt(char)= "k"
      console.log(pass)
    }
    setPassword(pass)




  }, [length, numberAllowed, characterAllowed, setPassword]) //it use when any change happen in this array/dependencies optimization menas store it in cacha memoory

  // passwordGenerator();?

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, passwordGenerator])//any change happen in this array/dependencies then run it again 

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    // for makingg background blue when password copy
    passwordRef.current?.select();  // for makingg background blue when password copy
    
    //for setting range of copied
    // passwordRef.current?.setSelectionRange(0, 10);

  }, [password])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">

        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="className='flex-shadow' rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly

            ref={passwordRef}
          />
        </div>

        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input

              type="range"
              min={4}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}

            />
            <label>Length:{length}</label>

            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
