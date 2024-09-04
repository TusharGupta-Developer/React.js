import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    // Include numbers if allowed
    if (numberAllowed) str += "0123456789";
  
    // Include special characters if allowed
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/`~";
  
    // Generate the password
    for (let i = 0; i < length; i++) {
      // Get a random index from the string
      let charIndex = Math.floor(Math.random() * str.length);
  
      // Append the character at that index to the password
      pass += str.charAt(charIndex);
    }
  
    // Update the state with the generated password
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  
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
              min={1}
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
              // id="numberInput"
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev)//reverse the previous value
              }}

            />
            <label>Character</label>

            <input type="checkbox"
              value={Number}
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
