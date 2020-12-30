import './App.css';
import Home from './containerComponents/Home'
import LoginPage from './containerComponents/LoginPage'
import { Button } from 'semantic-ui-react'

function App() {

  
  
  return (
    <div className="App">
      <header className="App-header">
      <Button>Click Here</Button>
       <Home /> 
       <LoginPage />
      </header>
      
    </div>
  );
}

export default App;
