import React from "react"
import "../estilos/seccion.css"

function SeccionLeft(props){
    return(        
        <div id="seccion-left">
            <p>{props.name}</p>
        </div>        
    );
}
export default SeccionLeft;