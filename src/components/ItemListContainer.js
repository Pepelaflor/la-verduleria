import { render } from "@testing-library/react";
import React, { useState  }from "react";
import { ReactDOM } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";






export default function ItemListContainer (props) {
    return (
        <div className="Items">
        <ItemList/>
        </div>
        
    );
}