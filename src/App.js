
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
   <Home /> 
    {/* {isAuthenticated ? "" : <About/>} */}
 
     {/* <UserProfile/>  */}
     <LogoutButton/>
     
    </div>
  );
}

export default App;




  