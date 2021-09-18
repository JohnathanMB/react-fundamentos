import React from 'react';
import ReactDOM from 'react-dom'

//Donde se va a mostrar lo reenderizado
const root = document.getElementById('root')

//Declaración de componente basado en clase
//las clases poseen estados
//Si el estaod cambia, el componente también
//El estado es un objeto
//El estado de cada componente es aislado
class TarjetaFruta extends React.Component{
    //Inicializador de propiedades 
    //Proerty Initializer

    //1. No se usa constructor
    //2. Se define el state por fuera de donde sería el constructor
    //3. Los métodos se convierten a arrow functions
    state = {
        cantidad : 0
    }

    //A tener en cuenta que aunque los inicializadores
    // se usan normalmente por programadores
    //Esto no ahce parce del standar de ract
    //Esto funciona porque Create-react-app tiene
    //implementado babel que le ayuda a soportar esta caracteristica
    
    agregar = () => this.setState({cantidad: this.state.cantidad + 1})

    quitar= () => this.setState({cantidad: this.state.cantidad - 1})

    limpiar= () => this.setState({cantidad: 0})

    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> + </button>
                <button onClick={this.quitar}> - </button>
                <button onClick={this.limpiar}> Limpiar </button>
                <p>{this.props.price}</p>
            </div>
        )
    }

}

//Se debe crear un componente funcional
const App = () => (
    <div>
        <TarjetaFruta name={'Sandía'} price={1000}/>
        <TarjetaFruta name={'Pera'} price={5000}/>
        <TarjetaFruta name={'Uvas'} price={3000}/>
    </div>
)

//Al App es un elemento funcional debe ser ejecutado cuando se renedize
//Es decir -> <App/> 
ReactDOM.render(<App/> , root);
