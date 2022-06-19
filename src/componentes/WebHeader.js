import React from "react"
import "../estilos/header.css"

function WebHeader(){
    return (
        <header>
            <img src= {require("../imagenes/logo.png")} alt= "logo GC" id="header-img"/>
        </header>
    );
}

export default WebHeader;