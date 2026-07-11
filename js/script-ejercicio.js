let obras = [];

let contador = 0;
let cantObras = 0;

let tiempoMB = 0;
let costoMB = 0;

let formCantidad = document.querySelector("#form-cantidad");
let formObras = document.querySelector("#form-obras");

let inputCantidad = document.querySelector("#cantidad");
let inputNombre = document.querySelector("#nombre");
let inputDuracion = document.querySelector("#duracion");
let inputPeso = document.querySelector("#peso");
let inputTiempo = document.querySelector("#tiempo");
let inputCosto = document.querySelector("#costo");

let btnCantidad = document.querySelector("#btn-cantidad");
let rstCantidad = document.querySelector("#rst-cantidad");
let btnAgregar = document.querySelector("#btn-agregar");
let btnReset = document.querySelector("#btn-reset");
let btnCalcular = document.querySelector("#btn-calcular");
let btnReiniciar = document.querySelector("#btn-reiniciar");

let resultado = document.querySelector("#resultado");

function bloquearFormulario(estado) {
  inputNombre.disabled = estado;
  inputDuracion.disabled = estado;
  inputPeso.disabled = estado;
  inputTiempo.disabled = estado;
  inputCosto.disabled = estado;
  btnAgregar.disabled = estado;
  btnReset.disabled = estado;
}

bloquearFormulario(true);

formCantidad.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputCantidad.value == "" || inputCantidad.value <= 0) {
    alert("Ingrese una cantidad válida.");
  } else {
    cantObras = Number(inputCantidad.value);
    inputCantidad.disabled = true;
    btnCantidad.disabled = true;
    rstCantidad.disabled = true;

    bloquearFormulario(false);
  }
});

formObras.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    inputNombre.value == "" ||
    inputDuracion.value <= 0 ||
    inputPeso.value <= 0 ||
    inputTiempo.value <= 0 ||
    inputCosto.value <= 0
  ) {
    alert("Complete todos los campos.");
  } else {
    tiempoMB = Number(inputTiempo.value);
    costoMB = Number(inputCosto.value);

    let obra = {
      nombre: inputNombre.value,
      duracion: Number(inputDuracion.value),
      peso: Number(inputPeso.value),
    };

    obras.push(obra);

    contador++;
    inputNombre.value = "";
    inputDuracion.value = "";
    inputPeso.value = "";

    if (contador == 1) {
      inputTiempo.disabled = true;
      inputCosto.disabled = true;
      btnReset.disabled = false;
    }
    if (contador == cantObras) {
      btnAgregar.disabled = true;
      btnReset.disabled = true;
      btnCalcular.disabled = false;
      inputNombre.disabled = true;
      inputDuracion.disabled = true;
      inputPeso.disabled = true;
    }
  }
});

btnCalcular.addEventListener("click", function () {
  let duracionTotal = 0;
  let duracionProm = 0;

  let mayorDuracion = 0;
  let mayorNombre = "";
  let mayorPeso = 0;

  let costoMensual = 0;

  for (let i = 0; i < obras.length; i++) {
    duracionTotal += obras[i].duracion;
    costoMensual += obras[i].peso * costoMB;

    if (obras[i].duracion > mayorDuracion) {
      mayorDuracion = obras[i].duracion;
      mayorNombre = obras[i].nombre;
      mayorPeso = obras[i].peso;
    }
  }

  duracionProm = duracionTotal / cantObras;

  let tiempoDescarga = mayorPeso * tiempoMB;
  let costoAnual = costoMensual * 12;

  resultado.style.display = "flex";
  resultado.innerHTML = `<h2>Resultados</h2>
<ul>
<li><strong>Duración total:</strong> ${duracionTotal} minutos.</li>
<li><strong>Duración promedio:</strong> ${duracionProm} minutos.</li>
<li><strong>Obra de mayor duración:</strong> ${mayorNombre}.</li>
<li><strong>Tiempo de descarga:</strong> ${tiempoDescarga} ms.</li>
<li><strong>Costo anual:</strong> $${costoAnual}.</li>
</ul>`;

  btnReiniciar.disabled = false;
  btnCalcular.disabled = true;
});

btnReiniciar.addEventListener("click", function () {
  obras = [];
  cantObras = 0;
  contador = 0;

  tiempoMB = 0;
  costoMB = 0;

  inputCantidad.value = "";

  inputNombre.value = "";
  inputDuracion.value = "";
  inputPeso.value = "";
  inputTiempo.value = "";
  inputCosto.value = "";

  resultado.innerHTML = "";

  inputCantidad.disabled = false;
  btnCantidad.disabled = false;
  rstCantidad.disabled = false;

  bloquearFormulario(true);

  btnCalcular.disabled = true;
  btnReiniciar.disabled = true;
});
