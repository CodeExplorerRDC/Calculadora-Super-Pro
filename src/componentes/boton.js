import React from 'react';
import '../css/boton.css';

function Boton(props) {
    function esOperador(valor) {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }
    return (
        <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;