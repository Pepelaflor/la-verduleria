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
      <div className='catalogo'>
      <ItemListContainer nombreItem="Lechuga" precioItem="112 pesos uruguayos"contenido="100 gramos de lechuga fresca y 100% natural"  stockValue='5' />
      <ItemListContainer nombreItem="Tomate" precioItem="88 pesos uruguayos"contenido="1kg de tomates americanos frescos y 100% naturales"  stockValue='5'/>
      <ItemListContainer nombreItem="Paltas" precioItem="100 pesos"contenido="Precio por unidad"  stockValue='5' />
      </div>
    </div>

  );
}

export default App;
