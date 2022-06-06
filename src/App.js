import React from 'react';
import './App.css';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <p>
          Bienvenido a la tienda web de La Verduleria
        </p>
      </header>
    </div>
  );
}

export default App;
