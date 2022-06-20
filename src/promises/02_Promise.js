import React from "react";
import ImageComponent from "../components/ImageComponent";
import LechugaIMG from "../multimedia/lechuga.jpg"
import Item from "../components/Item";


function APICall () {
    return new Promise((resolve) => {
        const data = [
            {
                id: '1',
                name: 'Lechuga',
                description: 'Lechuga fresca y natural',
                precio: 30,
                stock: 20,
                foto: <ImageComponent url={LechugaIMG}/>
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
        setTimeout(() => resolve(data), 1500)
    })
};

async function main() {
    try {  
    let resAPI = await APICall();
    console.log(`Respuesta: ${resAPI}`);
    }
    catch (error) {
        console.error('Error en la promesa', error)
    }
}

main();

console.log('App finalizada');

export default APICall;