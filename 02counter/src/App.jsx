// Import the 'useState' hook and other resources
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // Use the 'useState' hook to create a state variable 'counter' with an initial value of 15
  let [counter, setCount] = useState(15)

  // Define a function 'addValue' to increment the 'counter' value
  const addValue = () => {

    if (counter < 20) {
      // Update the 'counter' using the 'setCount' function
      // setCount(counter + 1)
      setCount((prevCounter)=>prevCounter+1);
      setCount((prevCounter)=>prevCounter+1);
      setCount((prevCounter)=>prevCounter+1);
      setCount((prevCounter)=>prevCounter+1);
      setCount((prevCounter)=>prevCounter+1);

      


    }
  }

  const removeValue = () => {
    // Check if the 'counter' is greater than 0
    if (counter > 0) {
      // Update the 'counter' using the 'setCount' function
      setCount(counter - 1)
    }
  }

  // JSX Rendering: What gets displayed on the page
  return (
    <>
      <h1>Hooks</h1>                 
      <h2>Counter value: {counter}</h2>  {/* Display the 'counter' value within an <h2> element */}

      {/* Button to add value with an 'onClick' event handler calling 'addValue' function */}
      <button onClick={addValue}>Add value</button>
      <br /> <br />  {/* Line breaks for spacing */}
      
      {/* Button to remove value with an 'onClick' event handler calling 'removeValue' function */}
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

// Export the 'App' component as the default export from this module
export default App
