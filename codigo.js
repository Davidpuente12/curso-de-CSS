    function derecha(){
        let caja = document.getElementById("ejemplorelative")
        let posicion = parseInt(getComputedStyle(caja).left) || 0
        caja.style.left = (posicion + 60) + "px"
    }
    function izquierda(){
        let caja = document.getElementById("ejemplorelative")
        let posicion = parseInt(getComputedStyle(caja).left) || 0
        caja.style.left = (posicion - 60) + "px"
    }
    function arriba(){
        let caja = document.getElementById("ejemplorelative")
        let posicion = parseInt(getComputedStyle(caja).top) || 0
        caja.style.top = (posicion - 60) + "px"
    }
    function abajo(){
        let caja = document.getElementById("ejemplorelative")
        let posicion = parseInt(getComputedStyle(caja).top) || 0
        caja.style.top = (posicion + 60) + "px"
    }
    //ejemplo absolute//

    function derecha1(){
        let caja = document.getElementById("ejemploabsolute")
        caja.style.left = "110px"
    }
    function izquierda2(){
        let caja = document.getElementById("ejemploabsolute")
        caja.style.left = "0px"
    }
    function arriba3(){
        let caja = document.getElementById("ejemploabsolute")
        caja.style.top = "0px"
    }
    function abajo4(){
        let caja = document.getElementById("ejemploabsolute")
        caja.style.top = "110px"
    }

//////////////////// SELECTORES COMBINADOS
const botonesSelectoresCombinados = document.querySelectorAll("#codigo-selectores button")
const contenedorSelectoresCombinados = document.getElementById("content-html")
const clases = ["descendiente","hijoDirecto","adyacentes","general"]

botonesSelectoresCombinados.forEach((boton,index) => {
    boton.addEventListener("click", () => {
        contenedorSelectoresCombinados.className = clases[index]
    })
})


