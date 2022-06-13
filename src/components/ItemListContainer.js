import { render } from "@testing-library/react";
import React, { useState  }from "react";
import { ReactDOM } from "react";



const BotonCounter = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
           setNum(num + 1);  
    };

    const decNum = () => {
        if(num > 0) {
        setNum(num - 1);
        }else{
            setNum(0);
        }
    };

    return (
        <div className="CounterContainer">
            <button className="BotonCounter" onClick={decNum}>-</button>
            <h3 className="BotonCounter">{num}</h3>
            <button className="BotonCounter" onClick={incNum}>+</button>
        </div>
    )
}


export default function ItemListContainer (props) {
    return (
        <div className="itemCatalogo">
        <p nombreItem=''>{props.nombreItem}</p>
        <p contenido=''>{props.contenido}</p>
        <p precioItem=''>{props.precioItem}</p>
        <p className="stockData">Stock: </p>
        <p stockValue='' className="stockData" >{props.stockValue}</p>
        <BotonCounter/>
        </div>
    );
}