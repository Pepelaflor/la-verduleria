import React from "react";

export const data = [
    {
        id: '1',
        name: 'Lechuga',
        description: 'Lechuga fresca y natural',
        precio: 30,
        stock: 20,
    },
    {
        id: '2',
        name: 'Tomates',
        description: 'Tomatitos ricos',
        precio: 80,
        stock: 10,
    },
    {
        id: '3',
        name: 'Banana',
        description: 'Bananas sin arañas',
        precio: 58,
        stock: 5,
    },
    {
        id: '4',
        name: 'Naranja',
        description: 'No es lo mismo que toronja',
        precio: 30,
        stock: 35,
    },
    {
        id: '5',
        name: 'Toronja',
        description: 'No es lo mismo que naranja',
        precio: 45,
        stock: 15,
    },
];

function Item (item) {
    return (
        <div>
        {data.map(item => {
            return (
            <div>
                {item.id}
                {item.name}
                {item.description}
                {item.precio}
                {item.stock}
            </div>   
            )
        })
        }
    </div>
    );
}

export default {
    data,
}

