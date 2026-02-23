/////////////////// PSEUDO CLASES
const botonesPseudoClases = document.getElementById("Elementos")

function pseudoClases(tipo){
    botonesPseudoClases.classList.toggle(tipo)
}

/////////////////// PSEUDO ELEMENTOS
const botonesPseudoElementos = document.querySelectorAll("#ejemplo-pseudo-elementos p")

function ejecutarPseudoElementos(tipo){
    botonesPseudoElementos.forEach(item => {
        item.classList.toggle(tipo)
    })
}