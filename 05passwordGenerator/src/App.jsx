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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 to-blue-800">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-xl p-8 my-12">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">🔑 Password Generator</h1>

        <div className="mb-4">
          <input
            type="text"
            value={password}
            className="w-full text-center py-3 px-4 rounded-lg text-lg font-mono text-gray-700 bg-gray-100 border border-gray-300 outline-none transition-colors duration-200 focus:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            readOnly
            ref={passwordRef}
          />
        </div>

        <button
          onClick={copyPasswordToClipboard}
          className="w-full py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold tracking-wide transition-transform hover:bg-blue-700 hover:scale-105 mb-6 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          📋 Copy Password
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <label htmlFor="lengthRange" className="text-gray-700 font-semibold">Length: {length}</label>
            <input
              id="lengthRange"
              type="range"
              min={1}
              max={100}
              value={length}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                id="characterCheckbox"
                type="checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="h-5 w-5 accent-blue-500 rounded-md focus:ring-0 cursor-pointer"
              />
              <label htmlFor="characterCheckbox" className="text-gray-700 font-semibold">Include Special Characters</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="numberCheckbox"
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="h-5 w-5 accent-blue-500 rounded-md focus:ring-0 cursor-pointer"
              />
              <label htmlFor="numberCheckbox" className="text-gray-700 font-semibold">Include Numbers</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}


export default App
