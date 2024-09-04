
import './App.css'
import UsercontextProvider from './Context/UserContextProvider';
import Login from './Componenets/Login';
import Profile from './Componenets/Profile';

function App() {

  return (
    <UsercontextProvider>
     <h1>Hello Context API</h1>

     <Login/>
     <Profile/>

    </UsercontextProvider>
  )
}

export default App
