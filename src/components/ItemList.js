import React from "react";
import Item, { data } from "./Item";
export default class ItemList extends React.Component{
    render() {
        const producto = data;
        return (
            <div>
                {producto.map(item => {
                    return (
                    <div className="ItemIndividual">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.precio}</p>
                        <p>{item.stock}</p>
                    </div>
                    )
                })}
            </div>
        )
    }

}
