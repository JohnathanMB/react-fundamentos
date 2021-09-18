import React from 'react';
import ReactDOM from 'react-dom'

//Donde se va a mostrar lo reenderizado
const root = document.getElementById('root')

// Inyectar expresiones con {}
// Puedes ser:
// Accesos a variables
// Expresiones matemáticas
// funciones
const name = 'Johnathan M'

const user1 = {
    name: 'JM',
    edad: 26
}

function getInfo(user){
    return `Hola mi nombre es ${user.name} y tengo ${user.edad} años`
}

const App1 = <h1>Hola React { name }</h1>
const App2 = <h1>Hola React { user1.edad }</h1>
const App3 = <h1>Hola React { user1.edad * 2 }</h1>
const App4 = <h1>{ getInfo(user1) }</h1>

//Se inyecta el elemento a renderizar
//parametros: 
// 'App' -> elemento a reenderizar
// 'root' -> Donde se va a reenderizas el elemento 'App'
//ReactDOM.render(App1, root)
//ReactDOM.render(App2, root)
//ReactDOM.render(App3, root)
ReactDOM.render(App4, root)
