import './App.css';
import LoginPage from './container/LoginPage'
import Home from './container/Home'
import {useState} from 'react'

function App() {

  

  const [user, setUser] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <LoginPage setUser={setUser}/>
        <Home user={user}/>
      </header>
      
    </div>
  );
}

export default App;
