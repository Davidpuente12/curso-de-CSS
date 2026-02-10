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


                            //UNIDADES DE MEDIDA

function mostrarRelativoPorcentaje() {
    const seccion = document.getElementById("relativoPorcentaje")
    seccion.style.display = (seccion.style.display == "none") ? "block" : "none"
}

//FLEXBOX
function displayInlineFlex(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.display = "inline-flex"
}

function displayFlex(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.display = "flex"
}
//FLEX DIRECTION
function row(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.flexDirection = "row"
}

function column(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.flexDirection = "column"
}

function rowReverse(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.flexDirection = "row-reverse"
}

function columnReverse(){
    const seccion = document.getElementById("contentFlexDireccion")
    seccion.style.flexDirection = "column-reverse"
}

//FLEX WRAP Y FLEX FLOW
let wrap = document.getElementById("contentFlexWrap")

function nowrap(){ wrap.style.flexWrap = "nowrap"}
function swrap(){ wrap.style.flexWrap = "wrap"}
function wrapReverse(){ wrap.style.flexWrap = "wrap-reverse"}

function rowWrap(){ wrap.style.flexFlow = "row wrap"}
function columnWrap(){ wrap.style.flexFlow = "column wrap"}

//GAP
let gap = document.getElementById("contentGap")

function gapIzquierda(){ gap.style.gap = "0px"}
function gapDerecha(){ gap.style.gap = "50px"}

//JUSTIFY CONTENT + ALING ITEMS + ALIGN SELF
let justify = document.getElementById("contentJustify")
let cont_aling_self = document.getElementById("itemJustify5")

function start(){ justify.style.justifyContent = "start"}
function end(){ justify.style.justifyContent = "end"}
function center(){ justify.style.justifyContent = "center"}
function spaceBetween(){ justify.style.justifyContent = "space-between"}
function spaceAround(){ justify.style.justifyContent = "space-around"}
function spaceEvenly(){ justify.style.justifyContent = "space-evenly"}

function startColumn(){ justify.style.alignItems = "start"}
function endColumn(){ justify.style.alignItems = "end"}
function centerColumn(){ justify.style.alignItems = "center"}
function stretch(){ justify.style.alignItems = "stretch"}
function baseline(){ justify.style.alignItems = "baseline"}

function startSelf(){ cont_aling_self.style.alignSelf = "start"}
function endSelf(){ cont_aling_self.style.alignSelf = "end"}
function centerSelf(){ cont_aling_self.style.alignSelf = "center"}
function stretchSelf(){ cont_aling_self.style.alignSelf = "stretch"}
function baselineSelf(){ cont_aling_self.style.alignSelf = "baseline"}
function autoSelf(){ cont_aling_self.style.alignSelf = "auto"}

//ALIGN CONTENT
let contAling = document.getElementById("align-content")

function rowWrap1(){ contAling.style.flexFlow = "row wrap"}
function columnWrap1(){ contAling.style.flexFlow = "column wrap"}

function start1(){ contAling.style.justifyContent = "start"}
function end1(){ contAling.style.justifyContent = "end"}
function center1(){ contAling.style.justifyContent = "center"}
function spaceBetween1(){ contAling.style.justifyContent = "space-between"}
function spaceAround1(){ contAling.style.justifyContent = "space-around"}
function spaceEvenly1(){ contAling.style.justifyContent = "space-evenly"}

function startWrap(){ contAling.style.alignContent = "start"}
function endWrap(){ contAling.style.alignContent = "end"}
function centerWrap(){ contAling.style.alignContent = "center"}
function spaceBetweenWrap(){ contAling.style.alignContent = "space-between"}
function spaceAroundWrap(){ contAling.style.alignContent = "space-around"}
function spaceEvenlyWrap(){ contAling.style.alignContent = "space-evenly"}
function stretchWrap(){ contAling.style.alignContent = "stretch"}

//ORDER
let contOrder = document.querySelector(".order3")

function order1(){ contOrder.style.order = "0"}
function order2(){ contOrder.style.order = "2"}
function order3(){ contOrder.style.order = "4"}
function order4(){ contOrder.style.order = "6"}
function order5(){ contOrder.style.order = "8"}

//PROPIEDADES DE FLEXIBILIDAD
let itemFlexibles = document.querySelectorAll(".itemFlexibles")

function contentBasis(){ itemFlexibles.forEach(item => { item.style.flexBasis = "content" })}
function tamañoBasis(){ itemFlexibles.forEach(item => { item.style.flexBasis = "200px" })}
function tamañoBasis2(){ itemFlexibles.forEach(item => { item.style.flexBasis = "500px" })}

function numeroGrow1(){ document.querySelector(".elemento1").style.flexGrow = "1" }
function numeroGrow2(){ document.querySelector(".elemento2").style.flexGrow = "2" }
function numeroGrow3(){ document.querySelector(".elemento3").style.flexGrow = "3" }

function numeroShrink(){ document.querySelector(".elemento1").style.flexShrink = "5" }

/////////////////////// RESPONSIVE DESING ////////////////////////////

function cambiarAncho(accion) {
    const caja = document.getElementById("content-responsive-united");
    let anchoActual = parseInt(window.getComputedStyle(caja).width);

    if (accion == "aumentar") {
        caja.style.width = (anchoActual + 50) + "px";
    }else if (accion == "reducir") {
        caja.style.width = Math.max(anchoActual - 50, 50) + "px";
    }
}
//Botones media 
function sintaxisMedia(accion){
    const tablaMedia = document.getElementById("tablaMedia")
    const tablaTipo = document.getElementById("tablaTipo")
    const tablaCondicion = document.getElementById("tablaCondicion")

    if(accion == "media"){
        tablaMedia.style.display = "block"
        tablaTipo.style.display = "none"
    }else if(accion == "tipos"){
        tablaTipo.style.display = "block"
        tablaMedia.style.display = "none"
    }else if(accion == "condicion"){
        tablaCondicion.style.display = "block"
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

//////////////////// TRANSFORMACIONES 2D
const elemento1 = document.querySelector("#circles div:nth-child(1) div")
const elemento2 = document.querySelector("#circles div:nth-child(2) div")
const elemento3 = document.querySelector("#circles div:nth-child(3) div")
const elemento4 = document.querySelector("#circles div:nth-child(4) div")
const elemento5 = document.querySelector("#circles div:nth-child(5) div")



function ejecutarTransform(tipo){
   
    if(tipo == 'traslate'){

        elemento1.className = "translateY transition"
        elemento2.className = "translate transition"
        elemento3.className = "translateX transition"
        elemento4.className = "translate2 transition"
        elemento5.className = "translateY2 transition"

        codigo.innerHTML = `
        <p>
            <b class="amarillo">element1</b>{<b class="sky">transform</b>: translateY(-30px);} 
        </p>
        <p>
            <b class="amarillo">element2</b>{<b class="sky">transform</b>: translate(32px, -32px);}
        </p>
        <p>
            <b class="amarillo">element3</b>{<b class="sky">transform</b>: translateX(100%);}
        </p>
        <p>
            <b class="amarillo">element2</b>{<b class="sky">transform</b>: translate(32px, 32px);}
        </p>
        <p>
            <b class="amarillo">element1</b>{<b class="sky">transform</b>: translateY(30px);} 
        </p>
        `
    }

    else if(tipo == 'scale'){
        elemento1.className = "scale transition"
        elemento2.className = "scale2 transition"
        elemento3.className = "scaleY transition"
        elemento4.className = "scaleX transition"
        elemento5.className = "scaleEspejo transition"

        codigo.innerHTML = `
        <p>
            <b class="amarillo">element1</b>{<b class="sky">transform</b>: scale(1.5);} 
        </p>
        <p>
            <b class="amarillo">element2</b>{<b class="sky">transform</b>: scale(0.8);}
        </p>
        <p>
            <b class="amarillo">element3</b>{<b class="sky">transform</b>: scaleY(1.5);}
        </p>
        <p>
            <b class="amarillo">element4</b>{<b class="sky">transform</b>: scaleX(1.5);}
        </p>
        <p>
            <b class="amarillo">element5</b>{<b class="sky">transform</b>: scale(-1);}
        </p>
        `
    }

    else if(tipo == 'skew'){
        elemento1.className = "skewX"
        elemento2.className = "skewX2"
        elemento3.className = "skewY"
        elemento4.className = "skewY2"
        elemento5.className = "skew"

        codigo.innerHTML = `
        <p>
            <b class="amarillo">element1</b>{<b class="sky">transform</b>: skewX(70deg);} 
        </p>
        <p>
            <b class="amarillo">element2</b>{<b class="sky">transform</b>: skewX(-70deg);}
        </p>
        <p>
            <b class="amarillo">element3</b>{<b class="sky">transform</b>: skewY(70deg);}
        </p>
        <p>
            <b class="amarillo">element4</b>{<b class="sky">transform</b>: skewY(-70deg);}
        </p>
        <p>
            <b class="amarillo">element5</b>{<b class="sky">transform</b>: skew(60deg, 60deg);}
        </p>
        `
    }

    else if(tipo == 'rotate'){
        elemento1.className = "rotateX"
        elemento2.className = "rotateY"
        elemento3.className = "rotateZ"
        elemento4.className = "rotate3d"
        elemento5.className = "rotate-T-O"

        codigo.innerHTML = `
        <p>
            <b class="amarillo">element1</b>{<b class="sky">transform</b>: rotateX(180deg);} 
        </p>
        <p>
            <b class="amarillo">element2</b>{<b class="sky">transform</b>: rotateY(180deg);}
        </p>
        <p>
            <b class="amarillo">element3</b>{<b class="sky">transform</b>: rotateZ(180deg);}
        </p>
        <p>
            <b class="amarillo">element4</b>{<b class="sky">transform</b>: rotate3d(1, 1, 1, 180deg);}
        </p>
        <p>
            <b class="amarillo">element5</b>{ <br>
            &emsp; <b class="sky">transform</b>: rotate(180deg); <br>
            &emsp; <b class="sky">transform-origin</b>: left; <br>
            }
        </p>
        `
    }
   
}

//////////////////// TRANSFORMACIONES 3D
const elemento3D = document.querySelector('.container-transform-3D:nth-child(1) div')
const elemento3D1 = document.querySelector('.container-transform-3D:nth-child(2) div')
const elemento3D2 = document.querySelector('.container-transform-3D:nth-child(3) div')

function ejecutarTransform3D(){
    const elementos = [elemento3D, elemento3D1, elemento3D2]
    elementos.forEach(item => item.className = "item-transform-style rotateY")
}

function ejecutarBackfaceVisibility(){
    const codigo = document.getElementById('codigo-backface-visibility')
    const pagina = document.getElementById('vista-previa')

    codigo.innerHTML = `
    <p class="margincero">
        <b class="amarillo">.container-backface-visibility</b>{
        <div class="margenIz">
            <b class="sky">width</b>: 200px; <br>
            <b class="sky">height</b>: 200px; <br>
            <b class="sky">transform-style</b>: <b class="orange">preserve-3d</b>; <br>
            <b class="sky">position</b>: <b class="orange">relative</b>; 
        </div>
        } <br>

        <b class="amarillo">.container-backface-visibility:hover</b>{
        <div class="margenIz">
            <b class="sky">transform</b>: <b class="amarillo2">rotateY</b>(1800deg); <br>
            <b class="sky">transition</b>: 40s;
        </div>
        } <br>

        <b class="amarillo">.item-front-backface-visibility</b>{
        <div class="margenIz">
            <b class="sky">width</b>: 100%; <br>
            <b class="sky">height</b>: 100%; <br>
            <b class="sky">position</b>: <b class="orange">absolute</b>; <br>
            <b class="sky">background</b>: linear-gradient(...); <br>
            <b class="sky">backface-visibility</b>: <b class="orange">hidden</b>;
        </div>
        } <br>

        <b class="amarillo">.item-back-backface-visibility</b>{
        <div class="margenIz">
            <b class="sky">width</b>: 100%; <br>
            <b class="sky">height</b>: 100%; <br>
            <b class="sky">position</b>: <b class="orange">absolute</b>; <br>
            <b class="sky">background</b>: linear-gradient(...); <br>
            <b class="sky">backface-visibility</b>: <b class="orange">hidden</b>; <br>
            <b class="sky">transform</b>: <b class="amarillo2">rotateY</b>(180deg);
        </div>
        } 
    </p>
    `
    pagina.innerHTML = `
    <div class="container-backface-visibility">
        <div class= "item-front-backface-visibility">Tocar</div>
        <div class= "item-back-backface-visibility">Tocar</div>
    </div>
    `
}

