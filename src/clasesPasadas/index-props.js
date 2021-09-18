import React from 'react';
import ReactDOM from 'react-dom'

//Donde se va a mostrar lo reenderizado
const root = document.getElementById('root')

//Crear componentes funciones 
//Funcion flecha
//Las props se reciben como parametro (props) => {}
//Las props son un objeto y para usar los props recibidos
//Sólo se debe intentar obtener el valor con el nombre 
//que se envió como atributo ej: {props.name}
const TajetaFrutaFlecha = (props) => (
    <div>
        <h3>{props.name}</h3>
        <hr/>
        <p>{props.price}</p>
    </div>
)

//Se debe crear un componente funcional
//Los PROPS se envían a travez de los atributos del componente
//formato nombreProp = {valorProp}
//Se puede pasar cualquier objeto por props pero se deben
//pasar entre llaves {}
var fruta = "Uvas";
const App = () => (
    <div>
        <TajetaFrutaFlecha name={'Sandía'} price={1000}/>
        <TajetaFrutaFlecha name={'Pera'} price={2000}/>
        <TajetaFrutaFlecha name={`${fruta}`} price={5000}/>
    </div>
)

//Al App es un elemento funcional debe ser ejecutado cuando se renedize
//Es decir -> <App/> 
ReactDOM.render(<App/> , root);
