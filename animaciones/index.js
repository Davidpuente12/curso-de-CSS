const botonesAnimaciones = document.querySelectorAll('.botones_animaciones button');
const elementToAnimation = document.getElementById('element-to-animation');
const codigo = document.getElementById('codigo');

botonesAnimaciones.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('btn-change-color')){
            elementToAnimation.className = 'change-color';
            renderCodigo('change-color');
        }else if(button.classList.contains('btn-translate-scale')){
            elementToAnimation.className = 'translate-scale';
            renderCodigo('translate-scale');
        }else if(button.classList.contains('btn-lanzamiento')){
            elementToAnimation.className = 'lanzamiento';
            renderCodigo('lanzamiento');
        }
    });
});

function renderCodigo(tipo){
    if(tipo === 'change-color'){
        codigo.innerHTML = `
        <p class="margincero">
            <b class="amarillo">#element-to-animation</b>{
            <div class="margenIz">
                <b class="sky">width</b>: 100px; <br>
                <b class="sky">height</b>: 100px; <br>
                <b class="sky">animation</b>: change-color 5s <b class="orange">infinite</b>;
            </div>
            }
        </p> 
        <p class="margincero">
            <b class="morado">@keyframes</b> change-color{
            <div class="margenIz">
                0% {<b class="sky">background-color</b>: red;} <br>
                50% {<b class="sky">background-color</b>: blue;} <br>
                100% {<b class="sky">background-color</b>: red;}
            </div>
            }
        </p>  
        `
    }
    else if(tipo === 'translate-scale'){
        codigo.innerHTML = `
            <p class="margincero">
                <b class="amarillo">#element-to-animation</b>{
                <div class="margenIz">
                    <b class="sky">width</b>: 100px; <br>
                    <b class="sky">height</b>: 100px; <br>
                    <b class="sky">animation-name</b>: <b class="orange">move</b>; <br>
                    <b class="sky">animation-duration</b>: 5s; <br>
                    <b class="sky">animation-iteration-count</b>: <b class="orange">infinite</b>;
                </div>
                }
            </p> 
            <p class="margincero">
                <b class="morado">@keyframes</b> <b class="sky">move</b>{
                <div class="margenIz">
                    0% { <br>
                    &emsp; <b class="sky">transform</b>: <b class="amarillo2">translateX</b>(0); <br>
                    } <br>
                    50% { <br>
                    &emsp; <b class="sky">transform</b>: <b class="amarillo2">translateX</b>(200px) <b class="amarillo2">scale</b>(0.8); <br>
                    &emsp; <b class="sky">background-color</b>: rgb(30, 169, 216);
                    } <br>
                    100% { <br>
                    &emsp; <b class="sky">transform</b>: <b class="amarillo2">translateX</b>(0) <b class="amarillo2">scale</b>(1); <br>
                    }
                </div>
                }
            </p>
        `
    }
    else if(tipo === 'lanzamiento'){
        codigo.innerHTML = `
        <p class="margincero">
            <b class="amarillo">#element-to-animation</b>{
            <div class="margenIz">
                <b class="sky">width</b>: 100px; <br>
                <b class="sky">height</b>: 100px; <br>
                <b class="sky">position</b>: <b class="orange">relative</b>; <br>
                <b class="sky">animation-name</b>: lanzamiento; <br>
                <b class="sky">animation-duration</b>: 3s; <br>
                <b class="sky">animation-timing-function</b>: <b class="orange">ease-in</b>; <br>
                <b class="sky">animation-delay</b>: 1s; <br>
                <b class="sky">animation-iteration-count</b>: <b class="orange">infinite</b>; <br>
            </div>
            }
        </p> 
        <p class="margincero">
            <b class="morado">@keyframes</b> <b class="sky">lanzamiento</b>{
            <div class="margenIz">
                0% { <br>
                &emsp; <b class="sky">left</b>: 0px; <br>
                &emsp; <b class="sky">bottom</b>: 0px; <br>
                &emsp; <b class="sky">transform</b>: <b class="amarillo2">rotate</b>(0deg); <br>
                } <br>
                50% { <br>
                &emsp; <b class="sky">bottom</b>: 60px; <br>
                } <br>
                100% { <br>
                &emsp; <b class="sky">bottom</b>: 0px; <br>
                &emsp; <b class="sky">left</b>: 280px; <br>
                &emsp; <b class="sky">transform</b>: <b class="amarillo2">rotate</b>(180deg); <br>
                }
            </div>
            }
        </p>
        `
    }
}