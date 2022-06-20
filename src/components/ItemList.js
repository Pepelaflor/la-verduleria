import React, { useState, useEffect } from "react";
import APICall from "../promises/02_Promise";
import LechugaImg from "../multimedia/lechuga.jpg"
import Item from "./Item";
function ItemList (Items) {
    const [data, setData] = useState([]);
    useEffect(() => {
        APICall().then((res) => setData(res));
    }, []);

    return (
        <div>
        {data.map(item => {
            return (
            <div className="Item">
                <Item id={item.id} name={item.name} description={item.description} precio={item.precio} stock={item.stock} foto={item.foto}/>
            </div>
            )
        })
        }
    </div>
    );
}

export default ItemList;