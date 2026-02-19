const pagina = document.getElementById('pagina-control-texto')
const codigo = document.getElementById('codigo-control-texto')

// clases
const clasesTextAlign = ["left","right","center","justify"]
const clasesTextTransform = ["uppercase","lowercase","capitalize"]
const clasesTextDecoration = ["underline","overline","line-through"]

function textAling(tipo){
    clasesTextAlign.forEach(clase => {
        if(tipo === clase){
            pagina.className = clase
        }
    })   
}

function textTransform(tipo){
    clasesTextTransform.forEach(clase => {
        if(tipo === clase){
            pagina.className = clase
        }
    })
}

function textDecoration(tipo){
    clasesTextDecoration.forEach(clase => {
        if(tipo === clase){
            pagina.className = clase
        }
    })
}

function textIndent(clase){
    pagina.className = clase
}

function controlDeTexto(tipo){

    if(tipo === "text-align"){
        codigo.innerHTML = `
            <p>
                <b class="amarillo">p</b>{ 
                <b class="sky">text-align</b>: 
                <button
                    onclick="textAling('left')">
                    <b class="orange">left</b>
                </button>; }
            </p>
            <p>
                <b class="amarillo">p</b>{
                <b class="sky">text-align</b>: 
                <button
                    onclick="textAling('center')">
                    <b class="orange">center</b>
                </button>; }
            </p>
            <p>
                <b class="amarillo">p</b>{
                <b class="sky">text-align</b>: 
                <button
                    onclick="textAling('right')">
                    <b class="orange">right</b>
                </button>; }
            </p>
            <p>
                <b class="amarillo">p</b>{
                <b class="sky">text-align</b>: 
                <button
                    onclick="textAling('justify')">
                    <b class="orange">justify</b>
                </button>; }
            </p>
        `
    }
    else if(tipo === "text-transform"){
        codigo.innerHTML = `
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-transform</b>: 
            <button
                onclick="textTransform('uppercase')">
                <b class="orange">uppercase</b>
            </button>; }
        </p>
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-transform</b>: 
            <button
                onclick="textTransform('lowercase')">
                <b class="orange">lowercase</b>
            </button>; }
        </p>
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-transform</b>: 
            <button
                onclick="textTransform('capitalize')">
                <b class="orange">capitalize</b>
            </button>; }
        </p>
        `
    }
    else if(tipo === "text-decoration"){
        codigo.innerHTML = `
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-decoration</b>: 
            <button
                onclick="textDecoration('underline')">
                <b class="orange">underline</b>
            </button>; }
        </p>
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-decoration</b>: 
            <button
                onclick="textDecoration('overline')">
                <b class="orange">overline</b>
            </button>; }
        </p>
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-decoration</b>: 
            <button
                onclick="textDecoration('line-through')">
                <b class="orange">line-through</b>
            </button>; }
        </p>
        `
    }
    else if(tipo === "text-indent"){
        codigo.innerHTML = ` 
        <p>
            <b class="amarillo">p</b>{
            <b class="sky">text-indent</b>: 
            <button
                onclick="textIndent('indent')">
                <b class="verde">4rem</b>
            </button>; }
        </p>
        `
    }
}

