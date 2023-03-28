
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import YourEvent from './components/yourevent/YourEvent';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <LogoutButton />

    </div>
  );
}

export default App;




