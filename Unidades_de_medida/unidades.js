function mostrarRelativoPorcentaje() {
    const seccion = document.getElementById("relativoPorcentaje")
    seccion.style.display = (seccion.style.display == "none") ? "block" : "none"
}

function ejecutarUnidades(tipo){
    const codigo = document.getElementById("codigo-unidades-de-fuente")
    const pagina = document.getElementById("pagina-unidades-de-fuente")

    if(tipo == "em"){
        pagina.innerHTML = `
        <div id="container-em" class="centrarTexto">
            <p>tamaño de <b class="verde">1em</b> (1 * 16 = 16px) </p>
            <p>tamaño de <b class="verde">1.5em</b> (1.5 * 16 = 24px)</p> 
            <p>tamaño de <b class="verde">2em</b> (2 * 16 = 32px)</p>
        </div>
        `

        codigo.innerHTML = `
        <p>
            <b class="amarillo">#container-em</b>{ <br>
            &emsp; <b class="sky">font-size</b>: <b class="verde">16px</b>; <br>
            }
        </p>

        <p>
            <b class="amarillo">.itemUno</b>{font-size: 1em;} <br>
            <b class="amarillo">.itemDos</b>{font-size: 1.5em;} <br>
            <b class="amarillo">.itemTres</b>{font-size: 2em;} 
        </p>
        `
    }

    else if(tipo == "rem"){
        pagina.innerHTML = `
        <div id="container-rem">
            <p>tamaño de <b class="verde">1rem</b> (1 * 20 = 20px) </p>
            <p>tamaño de <b class="verde">1.5rem</b> (1.5 * 20 = 30px)</p> 
            <p>tamaño de <b class="verde">2rem</b> (2 * 20 = 40px)</p>
        </div>
        `

        codigo.innerHTML = `
        <p>
            <b class="amarillo">:root</b>{ <br>
            &emsp; <b class="sky">font-size</b>: <b class="verde">20px</b>; <br>
            }
        </p>

        <p>
            <b class="amarillo">.itemUno</b>{font-size: 1rem;} <br>
            <b class="amarillo">.itemDos</b>{font-size: 1.5rem;} <br>
            <b class="amarillo">.itemTres</b>{font-size: 2rem;} 
        </p>
        `
    }
}