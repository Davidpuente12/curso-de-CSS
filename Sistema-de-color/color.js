const pagina = document.getElementById("item-sistema-colores")

const clases = ["rgb","rgba","hexa","hsl","color"]
function sistemaColores(tipo){
    clases.forEach(clase => {
        if(clase === tipo){
            pagina.className = tipo
        }
    })
}

