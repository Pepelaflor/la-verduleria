import React, { useState  }from "react";




function ItemCount ({stock, initial, onAdd}) {
    const [num, setNum, ] = useState(0);
    const incNum = () => {
        if(num < stock) {
         setNum(num + 1);   
        }else {
            alert('No hay mas stock');
        }
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
            <button className="ItemCount" onClick={decNum}>-</button>
            <h3 className="ItemCount">{num}</h3>
            <button className="ItemCount" onClick={incNum}>+</button>
        </div>
    )
}

export default ItemCount;