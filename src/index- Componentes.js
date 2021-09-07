import React from 'react';
import ReactDOM from 'react-dom'

//Donde se va a mostrar lo reenderizado
const root = document.getElementById('root')

//Crear componentes funciones 
//Se hace con una función 
function TarjetaFrutaUnaLinea(){
    return <div><h3>Titulo - TarjetaFrutaUnaLinea</h3><hr/></div>
}

function TarjetaFrutaVariasLinea(){
    return (
        <div>
            <h3>Titulo - TarjetaFrutaVariasLinea</h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
    )
}

//Funcion flecha
const TajetaFrutaFlecha = () => (
    <div>
        <h3>Titulo - TajetaFrutaFlecha</h3>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
    </div>
)

//Se debe crear un componente funcional
//los elementos dentro del componente pueden
//ser llamados como etiquet simple
//o doble etiqueta
//Si existen algunas diferencias entre los llamados
//Más adelante se verá este tema a fondo
const App = () => (
    <div>
        <TarjetaFrutaUnaLinea/>
        <TarjetaFrutaUnaLinea></TarjetaFrutaUnaLinea>
        <TarjetaFrutaVariasLinea/>
        <TajetaFrutaFlecha/>
    </div>
)

//Al App es un elemento funcional debe ser ejecutado cuando se renedize
//Es decir -> <App/> 
ReactDOM.render(<App/> , root);
