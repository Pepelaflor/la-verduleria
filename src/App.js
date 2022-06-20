import React from 'react';
import './App.css';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
       <h2>
          Bienvenido a la tienda web de La Verduleria
        </h2>
      <div className='Catalogo'>
      <ItemListContainer />
   
      </div>
    </div>

  );
}

export default App;
