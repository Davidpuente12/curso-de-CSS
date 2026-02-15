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
