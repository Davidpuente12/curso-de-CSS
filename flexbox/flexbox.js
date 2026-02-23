//FLEX DIRECTION
const contenedorFlexDirection = document.getElementById("contentFlexDireccion")
const clasesFlex = ["row","column","row-reverse","column-reverse"]

function flexDirection(tipo){
    clasesFlex.forEach(clase => {
        if(clase === tipo){
            contenedorFlexDirection.style.flexDirection = clase
        }
    })
}

//FLEX WRAP Y FLEX FLOW
const contentWrap = document.getElementById("contentFlexWrap")
const clasesWrap = ["nowrap","wrap","wrap-reverse"]

function flexWrap(tipo){ 
    clasesWrap.forEach(clase => {
        if(clase === tipo){
            contentWrap.style.flexWrap = clase
        }
    })
}


//JUSTIFY CONTENT + ALING ITEMS + ALIGN SELF
let justify = document.getElementById("contentJustify")
let cont_aling_self = document.getElementById("itemAlingSelf")

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