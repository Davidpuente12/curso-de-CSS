const pagina = document.getElementById('pagina-of-gradients')
const codigo = document.getElementById('codigo-gradientes')

function ejecutarGradientes(tipo){
    if(tipo === 'radial-gradient'){
        codigo.innerHTML = `
        <p>
            <b class="amarillo">.radial-simple</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">radial-gradient</b>( <br> &emsp; &emsp; 
            <b class="orange">circle</b>, 
            <span style="background: #1CB5E0;">#1CB5E0</span>,
            <span style="background: #000851;">#000851</span> <br>
            &emsp; ); <br>
            }
        </p>

        <p>
            <b class="amarillo">.radial-position</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">radial-gradient</b>( <br> &emsp; &emsp; 
            to <b class="orange">top left</b>, 
            <span style="background: #d53369;">#d53369</span>,
            <span style="background: #daae51;">#daae51</span> <br>
            &emsp; ); <br>
            }
        </p>

        <p>
            <b class="amarillo">.radial-multiple</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">radial-gradient</b>( <br> &emsp; 
            <b class="orange">circle</b> at <span class="verde">60% 40%</span>, 
            <span style="background: #ff6b6b;">#ff6b6b</span>0%,
            <span style="background: #feca57;">#feca57</span>40%,
            <span style="background: #48dbfb;">#48dbfb</span>100%<br>
            &emsp; ); <br>
            }
        </p>
        `

        pagina.innerHTML = `
        <div class="content-for-gradient radial-simple"></div>
        <div class="content-for-gradient radial-position"></div>
        <div class="content-for-gradient radial-multiple"></div>
        `
    }
    else if(tipo === "linear-gradient"){
        codigo.innerHTML = ` 
        <p>
            <b class="amarillo">.linear-simple</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">linear-gradient</b>(
            <span style="background: #3498db;">#3498db</span>,
            <span style="background: #9b59b6;">#9b59b6</span> 
            ); <br>
            }
        </p>

        <p>
            <b class="amarillo">.linear-direction</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">linear-gradient</b>( <br> &emsp; &emsp; 
            to <b class="orange">right</b>,
            <span style="background: #e74c3c;">#e74c3c</span>,
            <span style="background: #f39c12;">#f39c12</span> <br>
            &emsp; ); <br>
            }
        </p>

        <p>
            <b class="amarillo">.linear-diagonal</b>{ <br>
            &emsp; <b class="sky">background</b>: 
            <b class="amarillo2">linear-gradient</b>( <br> &emsp; &emsp; 
            to <b class="orange">bottom right</b>, 
            <span style="background: #2ecc71;">#2ecc71</span>,
            <span style="background: #3498db;">#3498db</span> <br>
            &emsp; ); <br>
            }
        </p>
        `

        pagina.innerHTML = `
        <div class="content-for-gradient linear-simple"></div>
        <div class="content-for-gradient linear-direction"></div>
        <div class="content-for-gradient linear-diagonal"></div>
        `
    }
}