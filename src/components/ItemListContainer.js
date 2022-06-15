import { render } from "@testing-library/react";
import React, { useState  }from "react";
import { ReactDOM } from "react";
import ItemCount from "./ItemCount";






export default function ItemListContainer (props) {
    return (
        <div className="itemCatalogo">
        <p nombreItem=''>{props.nombreItem}</p>
        <p contenido=''>{props.contenido}</p>
        <p precioItem=''>{props.precioItem}</p>
        <p className="stockData">Stock: </p>
        <p stockValue='' className="stockData" >{props.stockValue}</p>
        <ItemCount stock={5}/>
        </div>
    );
}