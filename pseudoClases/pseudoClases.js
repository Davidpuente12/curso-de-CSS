/////////////////// PSEUDO CLASES
const botones_nth_child = document.querySelectorAll('.botones-nth-child button')

function renderPseudoEstructuras(tipo){
    const codigo = document.querySelector('#codigo-nth')

    if(tipo === 'render-nth-child'){
        codigo.className = 'botones-nth botones-nth-child'
        codigo.innerHTML = `
        <p>
            <b class="amarillo">:nth-child(<b class="verde">5</b>)</b>{
            <b class="sky">background</b>: blue;}
        </p>
        <div>
            <p>selecciona elemento # 3</p> 
            <button>:nth-child(3)</button> 
            <button>p:nth-child(3)</button> 
        </div>
        <div>
            <p>selecciona elementos impares</p> 
            <button>:nth-child(odd)</button> 
            <button>p:nth-child(odd)</button> 
        </div>
        <div>
            <p>selecciona elementos pares</p> 
            <button>:nth-child(even)</button> 
            <button>p:nth-child(even)</button> 
        </div>
        <div>
            <p>selecciona cada tercer elemento </p> 
            <button>:nth-child(3n)</button>
            <button>p:nth-child(3n)</button>
        </div>
        <div>
            <p>cada tercer elemento empezando por el segundo</p> 
            <button>:nth-child(3n+2)</button>
            <button>p:nth-child(3n+2)</button>
        </div>
        <div>
            <p>selecciona los primeros tres elementos</p> 
            <button>:nth-child(-n+3)</button>
            <button>p:nth-child(-n+3)</button>
        </div>
        <div>
            <p>selecciona todos los elementos</p> 
            <button>:nth-child(n)</button>
            <button>p:nth-child(n)</button>
        </div>
        <div>
            <p>selecciona el primer elemento</p> 
            <button>:first-child</button>
            <button>p:first-child</button>
        </div>
        <div>
            <p>selecciona el ultimo elemento</p> 
            <button>:last-child</button>
            <button>p:last-child</button>
        </div>
        <div>
            <p>selecciona el elemento que es hijo unico</p> 
            <button>:onlychild</button>
            <button>span:onlychild</button>
        </div>
        `
        const botones_nth_child = document.querySelectorAll('.botones-nth-child button')
        return botonesNthChild(botones_nth_child)
    }
    else if(tipo === 'render-nth-type'){
        codigo.className = 'botones-nth botones-nth-type'
        codigo.innerHTML = `
        <p>
            <b class="amarillo">:nth-child(<b class="verde">5</b>)</b>{
            <b class="sky">background</b>: blue;}
        </p>
        <div>
            <p>Primer elemento de cada tipo de etiqueta</p> 
            <button>:nth-of-type(1)</button>
            <button>p:nth-of-type(1)</button>
        </div>
        `
        const botones_nth_type = document.querySelectorAll('.botones-nth-type button')
        return botonesNthType(botones_nth_type)
    }
    else if(tipo === 'render-has'){
        codigo.className = `botones-nth boton-has`
        codigo.innerHTML = `
        <p>
            <b class="amarillo">:has(p)</b>{
            <b class="sky">background</b>: blue;}
        </p>
        <button>:has</button>
        `
        const boton_has = document.querySelector('.boton-has button')
        boton_has.addEventListener('click',() => pseudoClases('has'))
    }

}

const btn_Controls = document.querySelectorAll('.btn-controls button')
btn_Controls.forEach((boton,index) => {
    boton.addEventListener('click', () => {
        if(index === 0) renderPseudoEstructuras('render-nth-child')
        else if(index === 1) renderPseudoEstructuras('render-nth-type')
        else if(index === 2) renderPseudoEstructuras('render-has')
    })
})

function botonesNthChild(botones){

    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            //nth-child(3)
            if(index === 0) pseudoClases('childn')
            else if(index === 1) pseudoClases('p-childn')
            //nth-child(odd)
            else if(index === 2) pseudoClases('odd')
            else if(index === 3) pseudoClases('p-odd')
            //nth-child(even)
            else if(index === 4) pseudoClases('even')
            else if(index === 5) pseudoClases('p-even')
            /* nth-child(3n) */
            else if(index === 6) pseudoClases('tresn')
            else if(index === 7) pseudoClases('p-tresn')
            /* nth-child(3n+2) */
            else if(index === 8) pseudoClases('dosn')
            else if(index === 9) pseudoClases('p-dosn')
            /* nth-child(-n+3) */
            else if(index === 10) pseudoClases('menostres')
            else if(index === 11) pseudoClases('p-menostres')
            /* nth-child(n) */
            else if(index === 12) pseudoClases('todos')
            else if(index === 13) pseudoClases('p-todos')
            /* first-child */
            else if(index === 14) pseudoClases('firstchild')
            else if(index === 15) pseudoClases('p-firstchild')
            /* last-child */
            else if(index === 16) pseudoClases('lastchild')
            else if(index === 17) pseudoClases('p-lastchild')
            /* nth-of-type(n) */
            else if(index === 18) pseudoClases('onlychild')
            else if(index === 19) pseudoClases('p-onlychild')
        })
    })
}
botonesNthChild(botones_nth_child)

function botonesNthType(botones) {
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            if(index === 0) pseudoClases('nthoftype')
            else if(index === 1) pseudoClases('p-nthoftype')
        })
    })
}

const elementos = document.getElementById("Elementos")
function pseudoClases(tipo){
    elementos.className = tipo
}



/////////////////// PSEUDO ELEMENTOS
const botonesPseudoElementos = document.querySelectorAll("#ejemplo-pseudo-elementos p")

function ejecutarPseudoElementos(tipo){
    botonesPseudoElementos.forEach(item => {
        item.classList.toggle(tipo)
    })
}