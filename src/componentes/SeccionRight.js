import React from "react"
import "../estilos/seccion.css"

function SeccionRight(props){
    return(        
        <div id="seccion-right">
            <p>{props.name}</p>
        </div>        
    );
}
export default SeccionRight;