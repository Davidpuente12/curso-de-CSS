const botonCodigo = document.querySelectorAll(".btn-ejecutar")
const contenedorGrid = document.getElementById("content-grid")

const clases = ["pixeles","fracciones","repeat"]

botonCodigo.forEach((btn,indice) => {
    btn.addEventListener("click", () => {
        contenedorGrid.className = clases[indice]
        
    })    
})

