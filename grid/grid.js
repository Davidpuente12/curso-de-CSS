const botonCodigo = document.querySelectorAll(".btn-ejecutar");
const contenedorGrid = document.getElementById("content-grid");

const clases = ["pixeles", "fracciones", "repeat"];

botonCodigo.forEach((btn, indice) => {
  btn.addEventListener("click", () => {
    contenedorGrid.className = clases[indice];
  });
});

// otras propiedades de formacion de filas
const contenedorGrid2 = document.querySelector(".content-grid-2");

document.querySelector(".grid-template-rows").addEventListener("click", () => {
  contenedorGrid2.style = " ";
  contenedorGrid2.style.gridTemplateRows = "100px 150px";
});

document.querySelector(".grid-auto-rows").addEventListener("click", () => {
  contenedorGrid2.style = " ";
  contenedorGrid2.style.gridAutoRows = "150px";
});

document.querySelector(".grid-auto-flow").addEventListener("click", () => {
  contenedorGrid2.style = " ";
  contenedorGrid2.style.gridAutoRows = "150px";
  contenedorGrid2.style.gridAutoFlow = "column";
});

// Propiedades de alineacion
const contenedorGrid3 = document.querySelector(".content-grid-3");

document.querySelector(".justify-content").addEventListener("click", () => {
  contenedorGrid3.style = " ";
  contenedorGrid3.style.justifyContent = "center";
});

document.querySelector(".align-content").addEventListener("click", () => {
  contenedorGrid3.style = " ";
  contenedorGrid3.style.alignContent = "center";
});

document.querySelector(".place-content").addEventListener("click", () => {
  contenedorGrid3.style = " ";
  contenedorGrid3.style.placeContent = "center";
});

// Propiedades de Ubicacion

const botones = document.querySelectorAll(".btns-ejemploGridUbicacion button");

botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (index === 0) {
      renderEjemplo("uno");
    } else if (index === 1) {
      renderEjemplo("dos");
    }
  });
});

function renderEjemplo(tipo) {
  const codigo = document.getElementById("codigoPropiedadesUbicacion");
  const demo = document.getElementById("content-grid-ubicacion");

  if (tipo === "uno") {
    demo.className = "content-grid-ubicacion";

    codigo.innerHTML = `
      <p>
        <b class="golden">.content</b> { <br />
        &emsp; <b class="sky">display</b>: grid; <br />
        &emsp; <b class="sky">grid-template-columns</b>: 150px 150px
        150px;
        <br />
        &emsp; <b class="sky">grid-template-rows</b>: 75px 75px 75px;
        <br />
        &emsp; <b class="sky">place-content</b>: center; <br />
        }
      </p>
      <p>
        <b class="golden">.item.uno</b> { <br />
        &emsp; <b class="sky">grid-column-start</b>: 1; <br />
        &emsp; <b class="sky">grid-column-end</b>: 4; <br />
        }
      </p>
      <p>
        <b class="golden">.item.dos</b> { <br />
        &emsp; <b class="sky">grid-row</b>: 2 / 4; <br />
        }
      </p>
      <p>
        <b class="golden">.item.tres</b> { <br />
        &emsp; <b class="sky">grid-area</b>: 2 / 2 / 4 / 4; <br />
        }
      </p>
  `;
  } else if (tipo === "dos") {
    demo.className = "content-grid-ubicacion2";

    codigo.innerHTML = ` 
      <p>
        <b class="golden">.content</b> { <br />
        &emsp; <b class="sky">display</b>: grid; <br />
        &emsp; <b class="sky">grid-template-columns</b>: 150px 150px
        150px;
        <br />
        &emsp; <b class="sky">grid-template-rows</b>: 75px 75px 75px;
        <br />
        &emsp; <b class="sky">place-content</b>: center; <br />
        &emsp; <b class="sky">grid-template-areas</b>: <br />
        &emsp; <b class="orange">"header header header"</b> <br />
        &emsp; <b class="orange">"main main aside"</b> <br />
        &emsp; <b class="orange">"main main aside"</b>; <br />
        }
      </p>
      <p>
        <b class="golden">.item.uno</b> { <br />
        &emsp; <b class="sky">grid-area</b>: main; <br />
        }
      </p>
      <p>
        <b class="golden">.item.dos</b> { <br />
        &emsp; <b class="sky">grid-area</b>: aside; <br />
        }
      </p>
      <p>
        <b class="golden">.item.tres</b> { <br />
        &emsp; <b class="sky">grid-area</b>: header; <br />
        }
      </p>
    `;
  }
}
