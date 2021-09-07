import React from 'react';
import ReactDOM from 'react-dom'

//Donde se va a mostrar lo reenderizado
const root = document.getElementById('root')

//Crear componentes funciones 
//Funcion flecha
const TajetaFrutaFlecha = () => (
    <div>
        <h3>Titulo - TajetaFrutaFlecha</h3>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
    </div>
)

//Se debe crear un componente funcional
const App = () => (
    <div>
        <TajetaFrutaFlecha/>
    </div>
)

//Al App es un elemento funcional debe ser ejecutado cuando se renedize
//Es decir -> <App/> 
ReactDOM.render(<App/> , root);
