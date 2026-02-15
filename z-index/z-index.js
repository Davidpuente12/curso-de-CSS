let ultimoItem = "itemUno";

function añadirZIndex (tipo){
    const items = ["itemUno","itemDos","itemTres"]

    items.forEach(item => {
        if(item === tipo){
            // ultimo
            document.querySelector(`.${ultimoItem}`).classList.remove("z-index")
            // actual
            document.querySelector(`.${tipo}`).classList.add("z-index")
        }
    })

    ultimoItem = tipo
}