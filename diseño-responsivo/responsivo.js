function cambiarAncho(accion) {
    const caja = document.getElementById("content-responsive");
    let anchoActual = parseInt(window.getComputedStyle(caja).width);

    if (accion == "aumentar") {
        caja.style.width = (anchoActual + 30) + "px";
    }else if (accion == "reducir") {
        caja.style.width = Math.max(anchoActual - 30, 30) + "px";
    }
}

//Botones media 
const tablaMedia = document.getElementById("tablaMedia")
const tablaTipo = document.getElementById("tablaTipo")
const tablaCondicion = document.getElementById("tablaCondicion")

function sintaxisMedia(accion){
    if(accion == "media"){
        tablaMedia.style.display = "block"
        tablaTipo.style.display = "none"
        tablaCondicion.style.display = "none"
    }else if(accion == "tipos"){
        tablaTipo.style.display = "block"
        tablaMedia.style.display = "none"
        tablaCondicion.style.display = "none"
    }else if(accion == "condicion"){
        tablaCondicion.style.display = "block"
        tablaMedia.style.display = "none"
        tablaTipo.style.display = "none"
    }
}

//Patrones de Diseño
function abrirVentana(accion){

    if(accion == "Mustly"){
        window.open("Patrones-Diseño/Mustly-Fluid/mustly.html", "popup", "width=500, height=700")
    }else if(accion == "Shifter"){
        window.open("Patrones-Diseño/Layout-Shifter/shifter.html", "popup", "width=500, height=700")
    }else if(accion == "Drop"){
        window.open("Patrones-Diseño/Column-Drop/drop.html", "popup", "width=500, height=700")
    }
    
}