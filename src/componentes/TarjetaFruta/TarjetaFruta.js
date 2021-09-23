import React from 'react'
//import './TarjetaFruta.css'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component{
    
    state = {
        cantidad : 0
    }

    agregar = () => this.setState({cantidad: this.state.cantidad + 1})
    quitar= () => this.setState({cantidad: this.state.cantidad - 1})
    limpiar= () => this.setState({cantidad: 0})
    render(){
        const tieneElementos = this.state.cantidad > 0;
        const card = styles.card;
        const cardActive = styles['card-active']
        const classes = tieneElementos ? card+' '+cardActive : card

        return (
            <div className={classes}>
                <h3>{this.props.name}</h3>
                <hr/>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> + </button>
                <button onClick={this.quitar}> - </button>
                <button onClick={this.limpiar}> Limpiar </button>
                <hr/>
                <p>{this.props.price}</p>
                <p>
                    Total : ${ this.props.price * this.state.cantidad}
                </p>
            </div>
        )
    }
}
//para poder utilizar este componente se debe exportar
export default TarjetaFruta