
import './App.css';

import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Header />
     
        <Home /> 
       
      <Footer />
     

    </div>
  );
}

export default App;




