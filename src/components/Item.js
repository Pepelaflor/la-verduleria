import React, { useState, useEffect } from "react";
import APICall from "../promises/02_Promise";
import LechugaImg from "../multimedia/lechuga.jpg"
import ItemList from "./ItemList";
import ImageComponent from "./ImageComponent";
import Popup from "./PopUp";



function Item (item) {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <li key={item.id}>
            <h3 className="ItemName">{item.name}</h3>
            
            <p className="ItemDescription">{item.description}</p>
            <button onClick={togglePopup}>Mas informacion</button>
            
            <p className="ItemStock">Stock: {item.stock} unidades</p>
            </li>
            {isOpen && <Popup
            content={<>
                <p>{item.foto}</p>
                <b>{item.name}</b>
                <p>{item.description}</p>
                <p>Precio: ${item.precio}</p>
                <p>Stock: {item.stock} unidades</p>
                <button>Añadir al carrito</button>
         </>}
         handleClose={togglePopup}
         />}
        </div>
        )
}

export default Item;

