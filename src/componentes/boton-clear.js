import React from "react";
import '../css/boton-clear.css';

function BotonClear({manejarClear, children}) {
    return (
        <div className="boton-clear"
        onClick={manejarClear}>
            {children}
        </div>
    );
}

export default BotonClear;