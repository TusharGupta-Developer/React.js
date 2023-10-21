import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}

const anotherElement =(
  <a href="https:/google.com" target='_blank'>visit google</a>
)

const anotherElement2 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
    // <MyApp/>
    //  {/* MyApp() */}
    //  anotherElement,
    //  anotherElement2
  //  </React.StrictMode>,
)
