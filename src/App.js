import './App.css';
import Logo from '../src/imagenes/logo.png';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


//ESTUDIAR A FONDO ESTO (CAMBIAR COLOR DE FONDO EN CASO DE ERROR, COMO HACER ANIMACIONES EN CASO DE ERROR, ETC)//

  const [input, setInput] = useState('');
  
  function manejarClic(val){
      setInput(input + val);
  }

  const [colorFondo, setColorFondo] = useState('');
  const [colorBody, setColorBody] = useState('');

  function calcularResultado() {
    if (input) {
      setInput(evaluate(input));
      setColorFondo(''); // Reinicia el color de fondo si hay un cálculo válido
      setColorBody('green');
    } else {
      setColorFondo('red'); // Asigna el color de fondo rojo en caso contrario
      setColorBody('error');
      alert('Error')
    }
  }  

  return (
<div className={`App ${colorBody === 'error' ? 'error' : ''}`}>
      <div className='freecodecamp-logo-contenedor' style={{margin: '30px'}}>
        <img src={Logo} width={'400px'}/>
      </div>
      <div className='contenedor-calculadora' style={{ backgroundColor: colorFondo }}>
        <Pantalla
        input={input}/>
        <div className='fila'>
          <Boton manejarClic={manejarClic}>1</Boton>
          <Boton manejarClic={manejarClic}>2</Boton>
          <Boton manejarClic={manejarClic}>3</Boton>
          <Boton manejarClic={manejarClic}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={manejarClic}>4</Boton>
          <Boton manejarClic={manejarClic}>5</Boton>
          <Boton manejarClic={manejarClic}>6</Boton>
          <Boton manejarClic={manejarClic}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={manejarClic}>7</Boton>
          <Boton manejarClic={manejarClic}>8</Boton>
          <Boton manejarClic={manejarClic}>9</Boton>
          <Boton manejarClic={manejarClic}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={manejarClic}>0</Boton>
          <Boton manejarClic={manejarClic}>.</Boton>
          <Boton manejarClic={manejarClic}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={manejarClic}>^</Boton>
          <Boton manejarClic={manejarClic}>√</Boton>
          <Boton manejarClic={manejarClic}>%</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={manejarClic}>(</Boton>
          <Boton manejarClic={manejarClic}>)</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
