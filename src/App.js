import './App.css';
import LoginPage from './container/LoginPage'
import Home from './container/Home'

function App() {

  
  // let login = () => {
  //   if (this.state.isLoggedIn){
  //     return <Home />
  //   }else{
  //     return <LoginPage />
  //   }
  // } 
  
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <Home />
      </header>
      
    </div>
  );
}

export default App;
