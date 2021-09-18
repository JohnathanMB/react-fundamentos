import React from 'react';
//Se debe importar el componente a usar
import TarjetaFruta from './componentes/TarjetaFrutas'

const App = () => (
    <div>
        <TarjetaFruta name={'Sandía'} price={1000}/>
        <TarjetaFruta name={'Pera'} price={5000}/>
        <TarjetaFruta name={'Uvas'} price={3000}/>
    </div>
)
//Exportamos módulo
export default App
